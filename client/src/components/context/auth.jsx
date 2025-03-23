import { createContext, useContext, useState } from "react";


export const AuthContext = createContext()


export const AuthProvider = ({children})=>{
    const [token,setToken] = useState(localStorage.getItem("token"))

    const storetokenInLs = (serverToken) => {
return localStorage.setItem("token", serverToken)
    }

    const LogoutUser = ()=>{
        setToken("")
        return localStorage.removeItem("token")
    }

    return <AuthContext.Provider value={{storetokenInLs,LogoutUser}}>
        {children}
    </AuthContext.Provider>   

}

export const useAuth = ()=>{
    return useContext(AuthContext)
}