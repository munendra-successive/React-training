import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../App";

const Navbar = () => {
  const { login, setLogin } = useContext(UserAuth);

  return (
    <>
      <nav>
        <Link to="/homefive">Home Page</Link>
        <Link to="/aboutfive">About Page</Link>
        <Link to="/servicefive">Service</Link>
        <Link to="/dashboardfive">Dashboard</Link>
        {login ? (
          <Link onClick={() => setLogin(false)} to="/homefive">
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