import React, { createContext, useEffect, useState, useContext } from "react";
import { AppContext } from "./AppContext";

const LoginContext = createContext();
const prefixUrl = process.env.REACT_APP_API_URL + "/api/auth";

function LoginProvider({ children }) {
    const ctx = useContext(AppContext);
    const [authorized, setAuthorized] = useState(null);

    const authorize = async () => {
        const response = await fetch(`${prefixUrl}/authorize-user`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
            },
            mode: 'cors',
            credentials: "include"
        });
        if (!response.ok) {
            console.info("Login invalid");
            ctx.setAccount(() => null);
            return false;
        }
        const data = await response.json();
        console.log("account data", data);
        ctx.setAccount(() => ({
            userId: data.userId,
            username: data.username,
            orgId: data.orgId,
            accountId: data.accountId,
            roles: data.roles,
        }));
        return true;
    }

    const handleSignUp = async (username, password, orgId, email, phoneNumber, isMain,) => {
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
        })
        console.log(response);
        return response;
    }

    const handleLogin = async (username, password) => {
        let success = false;
        try {
            const response = await fetch(`${prefixUrl}/login`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                mode: 'cors',
                body: JSON.stringify({ username, password }),
                credentials: "include"
            });
            console.log("response", response);
            const data = await response.json();
            console.log('Response data:', data);
            if (data['accessToken']) {
                if (!ctx) {
                    console.error("appcontext is missing. will not set accessToken :(")
                }
                console.log("new accessToken", data['accessToken']);
                ctx?.setAccessToken(data['accessToken']);
                success = true;
            } else {
                alert("Login failed.");
                throw new Error("Login failed. No access token found.");
            }
            // Handle the response data or perform further actions here
        } catch (error) {
            alert("Login failed.");
            ctx?.setAccessToken(null);
            console.error('Error:', error);
        }
        return success;
    };

    const handleLogout = async () => {
        const response = await fetch(`${prefixUrl}/logout`, {
            method: 'POST',
            mode: "cors",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
            }
        });

        if (response.ok) {
            // Logout successful, disable the profile and logout buttons
            alert('Logout successful!');
            [sessionStorage, localStorage].forEach(s => {
                ["accessToken", "refreshToken"].forEach(t => {
                    s.removeItem(t);
                })
            });
            setLoggedIn(false);
            setAccount(null);
            return true;
        }

        // Logout failed, show an error message
        alert('Logout failed.');
        return false;
    }

    useEffect(() => {
        console.log("login useeffect called to authorize");
        authorize().then(r => {
            setAuthorized(r);
        });
    }, []);
    
    const value = {
        username: ctx?.username,
        account: ctx?.account,
        loggedIn: ctx?.loggedIn,
        authorized,
        handleLogin, 
        handleLogout,
        handleSignUp
    };

    return <LoginContext.Provider value={value}>
        {children}
    </LoginContext.Provider>
}

export { LoginContext, LoginProvider };