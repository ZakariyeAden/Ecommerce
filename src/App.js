import React from "react";
import Navbar from "./Components/Navbar";
import { Routes,Route } from 'react-router-dom'
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Shop from "./Components/Pages/Shop";
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/about"  element={<About />}/>
        <Route path="/shop"  element={<Shop />}/>
      </Routes>
    </div>
  );
}

export default App;
