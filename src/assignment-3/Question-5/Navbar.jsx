import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "../assignment-3";

const Navbar = () => {
  const { login, setLogin,setText } = useContext(UserAuthContext);

  return (
    <>
      <nav>
        <Link to="/homefive">Home Page</Link>
        <Link to="/aboutfive">About Page</Link>
        <Link to="/servicefive">Service</Link>
        <Link to="/dashboardfive">Dashboard</Link>
        {login ? (
          <Link onClick={() => {setLogin(false);
          setText("Please Login")}} to="/homefive">
            Log out
          </Link>
        ) : (
          <Link to="/homefive">LogIn</Link>
        )}
      </nav>
    </>
  );
};
export default Navbar;
