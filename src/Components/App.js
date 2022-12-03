import React, { useLayoutEffect } from "react";
import Navbar from "./Navbar/Navbar";
import { Routes,Route } from 'react-router-dom'
import Home from "./Pages/Home";
import Cart from "./Cart/Cart";
import Shop from "./Pages/Shop";
import Footer from "./Pages/Footer";
import Details from "./Shop/Product/Details";


function App() {

  useLayoutEffect(() => {
    const loader = document.getElementById("loader");
    loader.classList.add("loaded");
    setTimeout (() => {
      document.body.removeChild(loader);
    }, 120000); //Anitmation duration
  },[]);
  
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/shop"  element={<Shop />}/>
        <Route path="/details:id"  element={<Details/>}/>
        <Route path="/cart"  element={<Cart />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
