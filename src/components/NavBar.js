import React from "react";
import "../css/App.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className= "navbar">
      <Link to="/" className="left">
        <span className="link">
         Ecomm App
        </span>
      </Link>
      <div className="right">
      <Link to="/Profile" className="link">
          My profile
        </Link>
        <Link to="/Cart" className="link">
          <span>My cart</span>
        </Link>
        <Link to="/Order" className="link">
          My orders
        </Link>
				<Link to="/Setting" className="link">
          Settings
        </Link>
    </div>
    </div>
  );
};
export default NavBar;