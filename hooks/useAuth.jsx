import { useMemo, useEffect, useState } from "react";
import jwt from 'jsonwebtoken';

const prefixUrl = process.env.REACT_APP_API_URL + "/api/auth";

export default function useAuth() {
    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
    const [account, setAccount] = useState(null);
    const [error, setError] = useState(null);

    const setTokens = (data) => {
        localStorage.setItem("accessToken", data['accessToken']);
        setAccessToken(data['accessToken']);
    };

    const removeTokens = () => {
        [sessionStorage, localStorage].forEach(s => {
            s.removeItem("refreshToken");
            s.removeItem("accessToken");
        });
        setAccessToken(null);
    };

    const [getUserIsLoading, setGetUserIsLoading] = useState(false);
    const getUser = async () => {
        setGetUserIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`${prefixUrl}/authorize-user`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                mode: 'cors',
                credentials: "include"
            });
            return response;
        } catch (error) {
            setError(error);
        } finally {
            setGetUserIsLoading(false);
        }
    };

    useEffect(() => {
        if (!accessToken) return;
        console.log("validating accessToken", accessToken);
        getUser().then((r) => {
            console.log(r);
            r.ok && setAccount(jwt.decode(accessToken));
        });
    }, [accessToken]);

    const [loginIsLoading, setLoginIsLoading] = useState(false);
    const handleLogin = async (formData) => {
        setLoginIsLoading(true);
        setError(null);
        try {
            const { username, password } = formData;
            const response = await fetch(`${prefixUrl}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                body: JSON.stringify({ username, password }),
                credentials: "include"
            });
            if (!response.ok) {
                throw new Error("Login failed");
            }
            const data = await response.json();
            if (!data?.['accessToken']) {
                throw new Error("Login failed. No access token found.");
            }
            setTokens(data);
            setAccount(jwt.decode(data['accessToken']));
        } catch (error) {
            setError(error);
        } finally {
            setLoginIsLoading(false);
        }
    };

    const [logoutIsLoading, setLogoutIsLoading] = useState(false);
    const handleLogout = async () => {
        setLogoutIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`${prefixUrl}/logout`, {
                method: 'POST',
                mode: "cors",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            if (!response.ok) {
                throw new Error("Logout failed");
            }
            removeTokens();
            setAccount(null);
        } catch (error) {
            setError(error);
        } finally {
            setLogoutIsLoading(false);
        }
    };

    const [signUpIsLoading, setSignUpIsLoading] = useState(false);
    const handleSignUp = async (formData) => {
        setSignUpIsLoading(true);
        setError(null);
        try {
            const { username, password, orgId, email, phoneNumber, isMain } = formData;
            const response = await fetch(`${prefixUrl}/signup`, {
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
            });
            if (!response.ok) {
                throw new Error("Signup failed");
            }
        } catch (error) {
            setError(error);
        } finally {
            setSignUpIsLoading(false);
        }
    };

    const handleSignUpAdmin = async (formData) => {
        setSignUpIsLoading(true);
        setError(null);
        try {
            const { username, password, orgId, email, phoneNumber, isMain } = formData;
            const response = await fetch(`${prefixUrl}/signup-admin`, {
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
            });
            if (!response.ok) {
                throw new Error("Admin signup failed");
            }
            const data = await response.text();
            console.log("Admin signup done:", data);
            const response_1 = await fetch(`${prefixUrl}/user-role-v2`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                body: JSON.stringify({
                    username,
                    roleName: "Admin"
                })
            });
            if (!response_1.ok) {
                throw new Error("Assigning admin role failed");
            }
            const data_1 = await response_1.json();
            console.log("Assign role done:", data_1);
        } catch (error) {
            setError(error);
        } finally {
            setSignUpIsLoading(false);
        }
    };


    return {
        account,
        accessToken,
        loading: getUserIsLoading || loginIsLoading || logoutIsLoading || signUpIsLoading,
        error,
        getUser,
        handleLogin,
        handleLogout,
        handleSignUp, handleSignUpAdmin
    };
}