import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "./Login";

const Navbar = () => {
  const { login, setLogin } = useContext(UserAuth);
  return (
    <>
      <Link to="/">Home Page</Link>
      <Link to="/about">About Page</Link>
      <Link to="/service">Service</Link>
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
