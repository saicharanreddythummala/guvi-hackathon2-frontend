import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Home from "./pages/Home";
import { useState } from "react";
import Cart from "./components/Cart";
import { useEffect } from "react";
import axios from "axios";

function App() {

  return (
    <>
      <div id="wrapper">
        <Navbar />
        <div id="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/products" element={<Products  />}/>
            {/* <Route path="/products" element={<Products onAdd={onAdd} onRemove={onRemove} />}/ */}
            <Route path="/cart" element={<Cart/>}/>
            {/* <Route path="/cart" element={<Cart cart={cart} onAdd={onAdd} />}/> */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
