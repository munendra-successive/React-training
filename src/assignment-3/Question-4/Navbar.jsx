import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../App";

const Navbar = () => {
  const { login, setLogin } = useContext(UserAuth);
  return (
    <>
      <nav>
        <Link to="/homefour">Home Page</Link>
        <Link to="/aboutfour">About Page</Link>
        <Link to="/servicefour">Service</Link>
        {login ? (
          <Link onClick={() => setLogin(false)} to="/">
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
