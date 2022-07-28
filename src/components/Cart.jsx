import React from "react";
import Item from "./Item";
import axios from "axios";
import { useEffect } from "react";

export default function Cart({ cart, onAdd }) {
  const postCart = async (prod) => {
    const res = await axios.post("http://localhost:4000/cart", prod);
    console.log(res);
  };

  return (
    <>
      <div className="container border mt-3 p-5">
        <Item cart={cart} onAdd={onAdd} />
        <button className="btn btn-primary mt-3" onClick={() => postCart(cart)}>
          Place order
        </button>
      </div>
    </>
  );
}
