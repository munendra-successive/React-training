import { useState,useContext,createContext } from "react";

/*

11.Build a shopping cart application using the useContext hook.
Set up a context to manage the state of the shopping cart.
Create components to display products and a shopping cart.
Use the useContext hook to access the cart state and update it.
Allow users to add and remove items from the cart.
Display the total price of items in the cart.

*/

const products=[{
    id:1,
    name:'Shirt',
    quantity:1,
    price:100
},
{
    id:2,
    name:'Pant',
    quantity:1,
    price:150
}
]
const ShoppingCart2=()=>{
    const[cart,setCart]=useState([]);

    const addItem=(item)=>{
        setCart([...cart,
        {id:item.id,name:item.name, quantity:item.quantity,price:item.price}]);
    }

    const Delete =(id)=>{
            const updatedItem = cart.filter((item)=>item.id!==id);
            setCart(updatedItem);
    }


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


export default ShoppingCart2;