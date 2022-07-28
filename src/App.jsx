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
  const [cart, setCart] = useState([]);

  const onAdd = (product) => {
    console.log(product)
    const exist = cart.find((x) => x._id === product._id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cart.find((x) => x._id === product._id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x._id !== product._id));
    } else {
      setCart(
        cart.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <>
      <div id="wrapper">
        <Navbar />
        <div id="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/products" element={<Products onAdd={onAdd} onRemove={onRemove} />}/>
            <Route path="/cart" element={<Cart cart={cart} onAdd={onAdd} />}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
