import React, { useMemo, useEffect, useState } from "react";
import useFetch from "./useFetch";
import jwt from 'jsonwebtoken';
import useAsync from "./useAsync";

const prefixUrl = process.env.REACT_APP_API_URL + "/api/auth";

/**
 * Custom login hook to handle all API calls regarding authentication, and reading of acceessToken
 * One global instance of this hook should be used and propagated down to any child that references it
 * 
 * TODO: Store fake credentials in here
 * @param {*} props 
 * @returns 
 */
export default function useLogin(props) {
    const doAuthorize = false;

    const loginFetch = useFetch();
    const signupFetch = useFetch();
    const signupFetch2 = useFetch();
    const authFetch = useFetch();
    const logoutFetch = useFetch();

    const [loggedIn, setLoggedIn] = useState(null);
    const [accessToken, _setAccessToken] = useState("test");

    const loading = false;

    const setAccessToken = (tok) => {
        //localStorage.setItem("accessToken", tok);
        _setAccessToken(tok);
    };

    const account = useMemo(() => {
        return (accessToken) ? jwt.decode(accessToken) : null;
    }, [accessToken]);

    console.info("useLogin accessToken", accessToken);
    console.info("local accessToken", localStorage.getItem("accessToken"))

    /** authorizes user to ensure accessToken and cookies are still valid */
    const authorize = () => {
        if (!accessToken) {
            console.log("No accessToken when calling authorize() ");
            return;
        }

        setLoggedIn(true);
    }

    //keep this functional
    const handleSignUp = (formData) => {
        const { username, password, orgId, email, phoneNumber, isMain } = formData;
        signupFetch.run(`${prefixUrl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({
                username,
                password,
                orgId,
                email,
                phoneNumber,
                isMain
            })
        }, (data) => {
            console.log("signup success", data);
            setResult((prev) => ({
                "success": true,
                "method": "handleSignUp"
            }));
        }, (error) => {
            console.error("signup error", error);
            setResult((prev) => ({
                "success": false,
                "method": "handleSignUp"
            }));
        });
    };

    //keep this functional
    const handleSignUpAdmin = (formData) => {
        const { username, password, orgId, email, phoneNumber, isMain } = formData;
        signupFetch2.run(
            () => fetch(`${prefixUrl}/signup-admin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                body: JSON.stringify({
                    username,
                    password,
                    orgId: 1,
                    email: String(email ?? ""),
                    phoneNumber: String(phoneNumber ?? ""),
                    isMain: true
                })
            }).then(async (res) => {
                if (!res.ok) {
                    throw new Error(res.status);
                }
                const r = await res.text();
                console.log("signup done", r)
                return fetch(`${prefixUrl}/user-role-v2`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                    body: JSON.stringify({
                        "username": username,
                        "roleName": "Admin"
                    })
                })
            }).then(async (res) => {
                const r = await res.json();
                console.log("assign role done", r);
                setResult((prev) => ({
                    "success": true,
                    "method": "handleSignUpAdmin"
                }));
            }).catch((err) => {
                console.error(err);
                setResult((prev) => ({
                    "success": false,
                    "method": "handleSignUpAdmin"
                }));
            })
        );
    }

    const handleLogin = (formData) => {
        const { username, password } = formData;
        loginFetch.run(`${prefixUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({ username, password }),
            credentials: "include"
        }, (data) => {
            if (!data?.['accessToken']) {
                console.error("Login failed. No access token found.");
                return;
            }

            setAccessToken(data['accessToken']);
            setLoggedIn(true);
        }, (error) => {
            console.error("login error", error);
        });
    };

    const removeTokens = () => {
        [sessionStorage, localStorage].forEach(s => {
            s.removeItem("refreshToken");
            s.removeItem("accessToken");
        });
        setAccessToken(null);
    }

    const handleLogout = () => {
        logoutFetch.run(`${prefixUrl}/logout`, {
            method: 'POST',
            mode: "cors",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        }, (data) => {
            console.log("logout:", data);
            removeTokens();
        }, (error) => {
            console.log("logout error", error);
            return;
        });
    }

    useEffect(() => {
        if (doAuthorize && accessToken) {
            console.log("authorizing...")
            authorize();
        }
    }, [accessToken]);

    return {
        account,
        loading,
        authorize, loggedIn,
        handleLogin,
        handleLogout,
        handleSignUp,
        handleSignUpAdmin,
        result,
        loginFetch, signupFetch, signupFetch2, authFetch, logoutFetch
    };
}
