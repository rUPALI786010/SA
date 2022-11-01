import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <div class="nav-wrapper white">
          <Link to="/" class="brand-logo left" style={{color: "black"}}>
          MakeMyTrip
          </Link>
          <ul id="nav-mobile" class="right">
            <li>
              <Link to="/profile" style={{color: "black"}}>Profile</Link>
            </li>
            <li>
              <Link to="/signin" style={{color: "black"}}>Signin</Link>
            </li>
            <li>
              <Link to="/signup" style={{color: "black"}}>Signup</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
