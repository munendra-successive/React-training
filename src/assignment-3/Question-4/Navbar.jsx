import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "../assignment-3";

const Navbar = () => {
  const { loginfour, setLoginFour, setText } = useContext(UserAuthContext);
  return (
    <>
      <nav>
        <Link to="/homefour">Home Page</Link>
        <Link to="/aboutfour">About Page</Link>
        <Link to="/servicefour">Service</Link>
        {loginfour ? (
          <Link
            onClick={() => {
              setLoginFour(false);
              setText("Please Login");
            }}
            to="/homefour"
          >
            Log out
          </Link>
        ) : (
          <Link to="/homefour">LogIn</Link>
        )}
      </nav>
    </>
  );
};
export default Navbar;
