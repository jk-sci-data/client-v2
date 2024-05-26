import { useMemo, useEffect, useState } from "react";
import jwt from 'jsonwebtoken';

const prefixUrl = process.env.REACT_APP_API_URL + "/api/auth";

export default function useAuth() {
    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
    const [loading, setLoading] = useState(false);
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

    const handleLogin = async (formData) => {
        setLoading(true);
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
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        setLoading(true);
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
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const handleSignUp = async (formData) => {
        setLoading(true);
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
            setLoading(false);
        }
    };

    const handleSignUpAdmin = async (formData) => {
        setLoading(true);
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
            setLoading(false);
        }
    };

    const account = useMemo(() => {
        return accessToken ? jwt.decode(accessToken) : null;
    }, [accessToken]);

    return {
        account,
        accessToken,
        loading,
        error,
        handleLogin,
        handleLogout,
        handleSignUp,
        handleSignUpAdmin
    };
}