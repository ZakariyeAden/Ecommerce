import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import Logo from '../Assets/LOGO.png'
import '../Style/Navbar.css'
import CartButton from "../Cart/CartButton";

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
`;
function Navbar() {
  return (
    <header>
      <DisplayFlex>
        <Link to="/"><img src={Logo} width="50"/></Link>
        <SpaceBtwn>
          <Link to="/" className="link">Home</Link>
          <Link to="/shop" className="link">Shop</Link>
        </SpaceBtwn>
        <CartButton/>
      </DisplayFlex>
    </header>
  );
}

export default Navbar;
