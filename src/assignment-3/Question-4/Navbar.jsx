import React from "react"
import { Link } from "react-router-dom"

const Navbar=()=>{

    return(
        <>
            <Link to='/'>Home Page</Link>
            <Link to='/about'>About Page</Link>
            <Link to='/service'>Service</Link>
        </>
    )
}
export default Navbar