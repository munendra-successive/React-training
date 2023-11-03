import React from "react"
import Product from "./Product";
import { Link } from "react-router-dom";
const Home=()=>{
    return(
        <>
        <h1>This is Assignment 6</h1>
        <nav>
            <ul>
                {Product.map((item)=><li><Link to={`/product/${item.id}`}>{item.name}</Link></li>)}
            </ul>
        </nav>
        </>
    )
}

export default Home;