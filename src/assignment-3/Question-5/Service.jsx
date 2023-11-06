import React from "react";
import { useContext } from "react";
import { UserAuth } from "../../App";
import { useNavigate } from "react-router-dom";


const Service=()=>{
    const { login } = useContext(UserAuth);
    const navigate=useNavigate()

    return(
        <>
        {login ? <div>This Service Page</div>:<div><button onClick={()=>navigate("/homefive")}>Please LogIn</button></div>}
        </>
    )
}

export default Service;