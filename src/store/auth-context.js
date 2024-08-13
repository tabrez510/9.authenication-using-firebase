import React, { useState } from "react";

const AuthContext = React.createContext({
    token: null,
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
});

export const AuthContextProvider = (props) => {

    const [token, setToken] = useState(null);
    const userIsLoggedIn = !!token;
    // console.log(userIsLoggedIn);

    const login = (token) => {
        // console.log(token);
        setToken(token);
    }

    const logout = () => {
        setToken(null);
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