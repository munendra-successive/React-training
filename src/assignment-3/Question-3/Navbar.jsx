import React from "react"
import { Link } from "react-router-dom"

const Navbar=()=>{

    return(
        <>
            <Link to='/'>Home Page</Link>
            <Link to='/about'>About Page</Link>
        </>
    )
}
export default Navbar