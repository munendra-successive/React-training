import { createContext, useState } from "react"
import About from "./About"
import Home from "./Home"
import Service from "./Service"
import Navbar from "./Navbar"

export const UserAuth=createContext()
const Login=()=>{
    const[login,setLogin]=useState(true)
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    return(
        <>
            <UserAuth.Provider value={{login,setLogin,username,setUsername,password,setPassword}}>
                <Home/>
                <About/>
                <Service/>
                <Navbar/>
            </UserAuth.Provider>
        </>
    )
}
export default Login;