import React, { useMemo, useEffect, useState } from "react";
import useFetch from "./useFetch";
import jwt from 'jsonwebtoken';

const prefixUrl = process.env.REACT_APP_API_URL + "/api/auth";

export default function useLogin(props) {
    const doAuthorize = props.doAuthorize ?? false;

    const [loggedIn, setLoggedIn] = useState(null);
    const [accessToken, setAccessToken] = useState(
        localStorage.getItem("accessToken")
    );
    const loginFetch = useFetch();
    const signupFetch = useFetch();
    const authFetch = useFetch();
    const logoutFetch = useFetch();

    const account = useMemo(() => {
        return (accessToken) ? jwt.decode(accessToken) : null;
    }, [accessToken]);

    useEffect(() => {
        if (!accessToken || !account) { 
            localStorage.removeItem("accessToken");
            return;
        }

        localStorage.setItem("accessToken", accessToken);
    }, [accessToken]);

    /** authorizes user to ensure accessToken and cookies are still valid */
    const authorize = () => {
        if (!accessToken) {
            console.log("No accessToken when calling authorize() ");
            return;
        }
        
        authFetch.run(`${prefixUrl}/authorize-user`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`
            },
            mode: 'cors',
            credentials: "include"
        }, (res) => {
            console.log("account data", res);
            console.log("authfetch.data", authFetch.data);
            setLoggedIn(true);
        }, (err) => {
            console.info("Login invalid", err);
            console.log("authfetch.error", authFetch.error);
            setAccessToken(null);
        });
    }

    // useEffect(() => {
    //     const {loading, error, data} = authFetch;
    //     if (loading)
    //         return;
    //     if (error) {
    //         console.info("Login invalid");
    //         setAccessToken(null);
    //         return;
    //     }
    //     if (data) {
    //         console.log("account data", data);
    //         setLoggedIn(true);
    //     }
    // }, [authFetch.loading]);

    const handleSignUp = (formData) => {
        const {username, password, orgId, email, phoneNumber, isMain} = formData;
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
        }, (res) => {
            console.log("signup success", res, signupFetch.data);
        }, (err) => {
            console.log("signup error", err, signupFetch.error);
        }
        )
    };

    // useEffect(() => {
    //     const {data, error, loading} = signupFetch;
    //     if (loading)
    //         return;
    //     if (error)
    //         console.log("signup error", error);
    //     if (data)
    //         console.log("signup success", signupFetch.data);
    // }, [signupFetch.loading]);


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
        });
    };

    useEffect(() => {
        if (!loginFetch)
            return;

        const {data, error, loading} = loginFetch;
        if (loading)
            return;
        if (error) {
            console.error("login error", error);
            return;
        }
        if (data?.['accessToken']) {
            setAccessToken(data['accessToken']);
            setLoggedIn(true);
        }
        else {
            console.info("Login failed.");
            console.error("Login failed. No access token found.");
        }
    }, [loginFetch.loading]);

    
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
        }, (res) => {
            alert('Logout successful!'); 
            setLoggedIn(false);     
            removeTokens();
            console.log("logoutFetch.data", logoutFetch.data)
        }, (err) => {
            console.log("logout error", err);
            return;
        });
    }


    // useEffect(() => {
    //     const {data, error, loading} = logoutFetch;
    //     if (loading)
    //         return;
    //     if (error) {
    //         console.log("logout error", error);
    //         return;
    //     }
    //     console.log("logout:", data);     
        
    // }, [logoutFetch.loading]);
    
    useEffect(() => {
        if (doAuthorize)
            authorize();
    }, []);

    return {
        account,
        authorize, loggedIn,
        handleLogin, 
        handleLogout,
        handleSignUp
    };
}
