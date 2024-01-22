import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "../assignment-3";

const Navbar = () => {
  const { login, setLogin, setText } = useContext(UserAuthContext);

  return (
    <>
      <nav>
        <Link to="/assignment3/question5">Home Page</Link>
        <Link to="/assignment3/question5/about">About Page</Link>
        <Link to="/assignment3/question5/service">Service</Link>
        <Link to="/assignment3/question5/dashboard">Dashboard</Link>
        {login ? (
          <Link
            onClick={() => {
              setLogin(false);
              setText("Please Login");
            }}
            to="/assignment3/question5"
          >
            Log out
          </Link>
        ) : (
          <Link to="/assignment3/question5">LogIn</Link>
        )}
      </nav>
    </>
  );
};
export default Navbar;
