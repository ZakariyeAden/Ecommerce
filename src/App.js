import React, { Fragment } from "react";
import Navbar from "./Components/Navbar";
import { Routes,Route } from 'react-router-dom'
import Home from "./Components/Pages/Home";
import Cart from "./Components/Cart/Cart";
import Shop from "./Components/Pages/Shop";
import Footer from "./Components/Pages/Footer";
import { useSelector } from "react-redux";
function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible)
  return (
    <Fragment>
      <Navbar/>
      {showCart && <Cart/>}
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/shop"  element={<Shop />}/>
      </Routes>
      <Footer/>
    </Fragment>
  );
}

export default App;
