import React from "react";
import { useContext } from "react";
import { UserAuthContext } from "../../App";
import { useNavigate } from "react-router-dom";


const Service=()=>{
    const { loginfour } = useContext(UserAuthContext);
    const navigate=useNavigate()

    return(
        <>
        {loginfour ? <div>This Service Page</div>:<div><button onClick={()=>navigate("/")}>Please LogIn</button></div>}
        </>
    )
}

export default Service;