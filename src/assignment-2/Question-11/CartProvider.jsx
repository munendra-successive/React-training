import { useContext, useState } from "react";
import { UserCart } from "./Shoping";

const CartProvider=()=>{
    const{cart,setCart,products,addItem,Delete}=useContext(UserCart);

    return(
        <>
        <h1>Product List</h1>
        <table style={{border:'5px solid'}}>
        <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        </tr>
            {products.map((item,index)=>(
                <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td><button onClick={()=>{addItem(item)}}>Add</button></td>
                </tr>
            ))}
        </table>
        <h1>Cart</h1>
        <table style={{border:'5px solid'}}>
        <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        </tr>
            {cart.map((item,index)=>(
                <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td><button onClick={()=>{Delete(item.id)}}>Delete</button></td>
                </tr>
            ))}
            <p>Total: {cart===null ? 0 :cart.reduce((acc,item)=>acc+item.price,0)}</p>
        </table>
        </>
    )
    
}

export default CartProvider;