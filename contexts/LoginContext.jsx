import React, { createContext, useEffect, useState } from "react";

const LoginContext = createContext();

function LoginProvider({ children }) {
    const accessToken = "12344";
    const username = "Test username";
    const prefixUrl = process.env.REACT_APP_API_URL + "/api/auth";
    const [authenticated, setAuthenticated] = useState(null);
    const [account, setAccount] = useState({});

    const handleLogin = async (username, password) => {
        // Make a POST request to the backend /login endpoint
        const response = await fetch(`${prefixUrl}/login`, {
            method: 'POST',
            mode: "cors",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        console.log(response);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            // Login successful, enable the profile and logout buttons

            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);
            localStorage.setItem("username", username);

            alert('Login successful!');
        }
    };

    const validateSession = async () => {
        console.log("is this even startring?")
        const accessToken = sessionStorage.getItem("accessToken") ?? localStorage.getItem("accessToken");
        if (!accessToken)
            return false;
        
        const response = await fetch(`${prefixUrl}/profile`, {
            method: 'GET',
            mode: "cors",
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${accessToken}` // Replace with the actual access token received after login
            }
        });
        console.log(response);
        if (response.ok) {
            // Profile access successful
            const data = await response.json();
            console.log(data);
            //alert('Profile access successful! Message from server: ' + data.message);
            return true;
        } 
        ["accessToken", "refreshToken", "username"].forEach((k) => localStorage.removeItem(k));
        return false;
    };

    const handleLogout = async (event) => {
        const response = await fetch(`${prefixUrl}/logout`, {
            method: 'POST',
            mode: "cors",
            credentials: 'include'
        });

        if (response.ok) {
            // Logout successful, disable the profile and logout buttons
            alert('Logout successful!');
            [sessionStorage, localStorage].forEach(s => {
                ["accessToken", "refreshToken"].forEach(t => {
                    s.removeItem(t);
                })
            });
            return;
        }

        // Logout failed, show an error message
        alert('Logout failed.');

    }


    React.useEffect(() => {
        console.log("login useeffect")
        validateSession().then((r) => {
            console.log("session validation", r);
            setAuthenticated(r.success === true);
            setAccount({
                "accessToken": sessionStorage.getItem("accessToken") ?? localStorage.getItem("accessToken"),
                "refreshToken": sessionStorage.getItem("refreshToken") ?? localStorage.getItem("refreshToken"),
                "username": sessionStorage.getItem("username") ?? localStorage.getItem("username"),
            })
        }).catch((err) => console.error("validation failed", err))
    }, []);

    const value = {
        accessToken, username,
        handleLogin, handleLogout, validateSession,
        authenticated, account
    };

    return <LoginContext.Provider value={value}>
        {children}
    </LoginContext.Provider>
}

export { LoginContext, LoginProvider };