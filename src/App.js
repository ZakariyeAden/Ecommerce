import React from "react";
import Navbar from "./Components/Navbar";
import { Routes,Route } from 'react-router-dom'
import Home from "./Components/Pages/Home";

import Shop from "./Components/Pages/Shop";
import Footer from "./Components/Pages/Footer";
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/shop"  element={<Shop />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
