import React from "react";
import "./Navbar.css"; // Add your CSS for the navbar here
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Your Logo</div>
      <ul className="nav-links">
        <li>
          {" "}
          <Link to={"/documentation"}>Home</Link>
        </li>
        <li>
          {" "}
          <Link to={"/login"}>Sign In</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
