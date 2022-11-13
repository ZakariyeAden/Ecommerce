import React, { Fragment } from "react";
import Navbar from "./Navbar/Navbar";
import { Routes,Route } from 'react-router-dom'
import Home from "./Pages/Home";
import Cart from "./Cart/Cart";
import Shop from "./Pages/Shop";
import Footer from "./Pages/Footer";
import Details from "./Shop/Product/Details";
import { useSelector } from "react-redux";
import ProductProvider from "./Context";
function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible)
  return (
    <ProductProvider>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/shop"  element={<Shop />}/>
        <Route path="/details:id"  element={<Details/>}/>
        <Route path="/cart"  element={<Cart />}/>
      </Routes>
      <Footer/>
    </ProductProvider>
  );
}

export default App;
