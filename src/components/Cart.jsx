import React from "react";
import Item from "./Item";
import axios from "axios";
import { useEffect } from "react";
import Context from "../context/Context";

export default function Cart( ) {
  // const postCart = async (prod) => {
  //   const res = await axios.post("http://localhost:4000/cart", prod);
  //   console.log(res);
  // };

  return (
    <>
      <div className="container border mt-3 p-5">
        {/* <Item cart={cart} onAdd={onAdd} /> */}
        <Item />
        <Context.Consumer>
          {(Consumer) => (
            <button
              className="btn btn-primary mt-3 me-auto"
              onClick={() => Consumer.postCart(Consumer.cart)}
            >
              Place order
            </button>
          )}
        </Context.Consumer>
      </div>
    </>
  );
}
