import React from "react";
import "./Signup.css"; // Import the Signup CSS
import { Link } from "react-router-dom"; // Import the Link component
function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <Link to={"/documentation"}>Signup</Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
