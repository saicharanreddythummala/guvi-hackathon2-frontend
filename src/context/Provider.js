import React from "react";
import Context from "./Context";
import { useState } from "react";
import axios from "axios";

export default function Provider(props) {
  const [cart, setCart] = useState([]);
  return (
    <Context.Provider
      value={{
        cart: cart,
        onAdd: (product) => {
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
          },
          onRemove : (product) => {
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
          },
          postCart : async (cart) => {
            if(cart.length>0){
                
                const res = await axios.post("http://localhost:4000/cart", cart);
                console.log(res.statusText);
            }
            }
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
