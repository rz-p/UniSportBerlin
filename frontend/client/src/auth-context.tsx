import {useContext, createContext, useState, default as React, ReactNode} from "react";

const AuthContext = createContext({status: "false", loginAction: () => {}, logOut: () => {}});

interface Props {
    children?: ReactNode
}

const AuthProvider = ({ children, ...props }: Props) => {
    const [status, setLoggedIn] = useState(localStorage.getItem("userLogged") || "false");

    const loginIn = () => {
        setLoggedIn("true");
        localStorage.setItem("userLogged", JSON.stringify(true));
    };

    const logOut = () => {
        setLoggedIn("false");
        localStorage.setItem("userLogged", JSON.stringify(false));
    };

    return (
        <AuthContext.Provider value={{ status, loginAction: loginIn, logOut }} {...props}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};
