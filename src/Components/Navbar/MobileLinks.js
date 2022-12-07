import React from "react";
import { Link } from "react-router-dom";
function MobileLinks() {
  return (
    <div className="mobile">
      <ul className="menu-links">
        <Link to="/" className="link link-">
          Home
        </Link>
        <Link to="/shop" className="link link-">
          Shop
        </Link>
        <Link to="/contact" className="link link-">
          Contact
        </Link>
      </ul>
    </div>
  );
}

export default MobileLinks;
