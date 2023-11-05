import React from "react";
import { useContext } from "react";
import { UserAuth } from "./Login";
import { useNavigate } from "react-router-dom";


const Service=()=>{
    const { login } = useContext(UserAuth);
    const navigate=useNavigate()

    return(
        <>
        {login ? <div>This Service Page</div>:<div><button onClick={()=>navigate("/")}>Please LogIn</button></div>}
        </>
    )
}

export default Service;