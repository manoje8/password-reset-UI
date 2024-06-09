import { createContext, useCallback, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchToken = useCallback(async () => {
        const storedToken = localStorage.getItem("token");
        setToken(storedToken);
        setLoading(false); 
    },[])

    useEffect(() => {
        fetchToken()
    },[fetchToken])

    const context = {
        token,
        setToken,
        loading
    }

    return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export default AuthProvider