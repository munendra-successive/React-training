import React from "react";
import { useContext } from "react";
import { userAuth } from "../../App";
import { useNavigate } from "react-router-dom";


const Service=()=>{
    const { login } = useContext(userAuth);
    const navigate=useNavigate()

    return(
        <>
        {login ? <div>This Service Page</div>:<div><button onClick={()=>navigate("/")}>Please LogIn</button></div>}
        </>
    )
}

export default Service;