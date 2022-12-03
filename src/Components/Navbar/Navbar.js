import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../Assets/LOGO.png";
import "../Style/Navbar.css";
import CartButton from "../Cart/CartButton";
import NavLinks from "./NavLinks";
import MobileLinks from "./MobileLinks";

const DisplayFlex = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
  font-size: 1.5rem;
`;
const SpaceBtwn = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 2rem;
  text-decoration: none;

  @media (max-width: 425px) {
  flex-direction:column;
}
`;
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <header>
      <DisplayFlex>
        <div className="menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={isMenuOpen ? "bar1-active" : "bar1"} />
          <div className={isMenuOpen ? "bar2-active" : "bar2"} />
        </div>
        <Link to="/">
          <img src={Logo} width="50" className="logo" />
        </Link>
        <SpaceBtwn>
          <NavLinks/>
          { isMenuOpen && <MobileLinks/> }
        </SpaceBtwn>
        <CartButton />
      </DisplayFlex>
    </header>
  );
}

export default Navbar;
