import { useMemo, useEffect, useState } from "react";
import { useQuery, useMutation } from '@tanstack/react-query';
import jwt from 'jsonwebtoken';

const prefixUrl = process.env.REACT_APP_API_URL + "/api/auth";

export default function useAuth(props) {
    const doAuthorize = props?.doAuthorize ?? false;

    const [accessToken, _setAccessToken] = useState(localStorage.getItem("accessToken"));
    const setAccessToken = (tok) => {
        _setAccessToken(tok);
        localStorage.setItem("accessToken", tok);
    }

    const { data: accountData, isLoading: isAuthorizing, refetch: handleAuthorize } = useQuery({
        queryKey: ['authorize', accessToken],
        queryFn: async () => {
            if (!accessToken) throw new Error("No accessToken found.");
            const response = await fetch(`${prefixUrl}/authorize-user`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                mode: 'cors',
                credentials: "include"
            });
            if (!response.ok) {
                throw new Error("Invalid access token");
            }
            return response.json();
        },
        enabled: doAuthorize && !!accessToken,
        onError: (error) => {
            console.error(error);
        }
    });
    const loggedIn = useMemo(() => {
        return !!accountData;
    }, [accountData]);

    const { data: signUpResult, error: signUpError, mutateAsync: handleSignUp, isLoading: isSigningUp } = useMutation({
        mutationFn: async (formData) => {
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
            return response;
        },
        onError: (error) => {
            console.error("Signup error:", error);
        }
    });

    const { data: signUpAdminResult, error: signUpAdminError, mutateAsync: handleSignUpAdmin, isLoading: isSigningUpAdmin } = useMutation({
        mutationFn: async (formData) => {
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
            return true;
        },
        onError: (error) => {
            console.error("Admin signup error:", error);
        }
    });

    const { mutate: handleLogin, isLoading: isLoggingIn, isError: isLoginError, error: loginError } = useMutation({
        mutationFn: async (formData) => {
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
            return data;
        },
        onSuccess: (data) => {
            console.log("Login success", data);
            setAccessToken(data['accessToken']);
        },
        onError: (error) => {
            console.error("Login error:", error);
        }
    });

    const { data: logoutResult, error: logoutError, mutateAsync: handleLogout } = useMutation({
        mutationFn: async () => {
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
            return response;
        },
        onError: (error) => {
            console.error("Logout error:", error);
        }
    });

    const removeTokens = () => {
        [sessionStorage, localStorage].forEach(s => {
            s.removeItem("refreshToken");
            s.removeItem("accessToken");
        });
        setAccessToken(null);
    };

    const account = useMemo(() => {
        return accessToken ? jwt.decode(accessToken) : null;
    }, [accessToken]);

    useEffect(() => {
        /*
        if (doAuthorize && accessToken) {
            console.log("Authorizing...");
        }*/
    }, [accessToken]);

    const loading = isAuthorizing || isSigningUp || isSigningUpAdmin || isLoggingIn;

    return {
        account,
        loading,
        loggedIn,
        handleLogin, loginError,
        handleLogout, logoutError,
        handleSignUp, signUpError,
        handleSignUpAdmin, signUpAdminError
    };
}