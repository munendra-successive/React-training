import React from "react";
import { useContext } from "react";
import { UserAuthContext } from "../assignment-3";
import { useNavigate } from "react-router-dom";


const Service=()=>{
    const { login } = useContext(UserAuthContext);
    const navigate=useNavigate()

    return(
        <>
        {login ? <div>This Service Page</div>:<div><button onClick={()=>navigate("/homefive")}>Please LogIn</button></div>}
        </>
    )
}

export default Service;