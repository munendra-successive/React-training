import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/homethree">Home Page</Link>
      <Link to="/aboutthree">About Page</Link>
    </nav>
  );
};
export default Navbar;
