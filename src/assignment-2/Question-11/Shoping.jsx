import { useState, useContext, createContext } from "react";
import CartProvider from "./CartProvider";

/*

11.Build a shopping cart application using the useContext hook.
Set up a context to manage the state of the shopping cart.
Create components to display products and a shopping cart.
Use the useContext hook to access the cart state and update it.
Allow users to add and remove items from the cart.
Display the total price of items in the cart.

*/
export const UserCart = createContext();

const products = [
  {
    id: 1,
    name: "Shirt",
    quantity: 1,
    price: 100,
  },
  {
    id: 2,
    name: "Pant",
    quantity: 1,
    price: 150,
  },
];
const Shoping = () => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([
      ...cart,
      {
        id: new Date().getTime(),
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      },
    ]);
  };

  const Delete = (id) => {
    const updatedItem = cart.filter((item) => item.id !== id);
    setCart(updatedItem);
  };

  return (
    <>
      <h4>
        11.Build a shopping cart application using the useContext hook. Set up a
        context to manage the state of the shopping cart. Create components to
        display products and a shopping cart. Use the useContext hook to access
        the cart state and update it. Allow users to add and remove items from
        the cart. Display the total price of items in the cart.
      </h4>
      <UserCart.Provider value={{ cart, setCart, products, addItem, Delete }}>
        <CartProvider />
      </UserCart.Provider>
    </>
  );
};

export default Shoping;
