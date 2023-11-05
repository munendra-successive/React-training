import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home Page</Link>
      <Link to="/about">About Page</Link>
    </nav>
  );
};
export default Navbar;
