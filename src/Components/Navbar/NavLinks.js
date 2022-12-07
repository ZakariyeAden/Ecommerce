import React from "react";
import { Link } from "react-router-dom";
function NavLinks() {
  return (
    <nav className="navbar "> 
      <Link to="/" className="link link-">
        Home
      </Link>
      <Link to="/shop" className="link link-">
        Shop
      </Link>
      <Link to="/contact" className="link link-">
        Contact
      </Link>
    </nav>
  );
}

export default NavLinks;
