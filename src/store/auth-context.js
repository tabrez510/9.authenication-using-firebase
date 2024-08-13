import React, { useState } from "react";

const AuthContext = React.createContext({
    token: null,
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
});

export const AuthContextProvider = (props) => {

    const initialToken = localStorage.getItem('token');

    const [token, setToken] = useState(initialToken);
    const userIsLoggedIn = !!token;

    const login = (token) => {
        localStorage.setItem('token', token);
        setToken(token);
    }

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token');
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: login,
        logout: logout
    }

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;