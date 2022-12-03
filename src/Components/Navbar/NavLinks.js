import React from "react";
import { Link } from "react-router-dom";
function NavLinks() {
  return (
    <nav className="navbar "> 
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/shop" className="link">
        Shop
      </Link>
    </nav>
  );
}

export default NavLinks;
