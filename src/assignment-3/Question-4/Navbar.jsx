import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../App";

const Navbar = () => {
  const { loginfour, setLoginFour } = useContext(UserAuth);
  return (
    <>
      <nav>
        <Link to="/homefour">Home Page</Link>
        <Link to="/aboutfour">About Page</Link>
        <Link to="/servicefour">Service</Link>
        {loginfour ? (
          <Link onClick={() => setLoginFour(false)} to="/homefour">
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
