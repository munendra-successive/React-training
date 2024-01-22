import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/assignment3/question3">Home Page</Link>
      <Link to="/assignment3/question3/about">About Page</Link>
    </nav>
  );
};
export default Navbar;
