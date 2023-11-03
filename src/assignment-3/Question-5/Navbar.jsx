import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userAuth } from "../../App";

const Navbar = () => {
  const { login, setLogin } = useContext(userAuth);
  return (
    <>
      <Link to="/">Home Page</Link>
      <Link to="/about">About Page</Link>
      <Link to="/service">Service</Link>
      <Link to="/Dashboard">Dashboard</Link>
      {login ? (
        <Link onClick={() => setLogin(false)} to="/">
          Log out
        </Link>
      ) : (
        <Link to="/">LogIn</Link>
      )}
    </>
  );
};
export default Navbar;
