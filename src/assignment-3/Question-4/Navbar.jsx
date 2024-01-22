import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "../assignment-3";

const Navbar = () => {
  const { loginfour, setLoginFour, setText } = useContext(UserAuthContext);
  return (
    <>
      <nav>
        <Link to="/assignment3/question4">Home Page</Link>
        <Link to="/assignment3/question4/about">About Page</Link>
        <Link to="/assignment3/question4/service">Service</Link>
        {loginfour ? (
          <Link
            onClick={() => {
              setLoginFour(false);
              setText("Please Login");
            }}
            to="/assignment3/question4"
          >
            Log out
          </Link>
        ) : (
          <Link to="/assignment3/question4">LogIn</Link>
        )}
      </nav>
    </>
  );
};
export default Navbar;
