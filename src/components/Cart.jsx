import React from "react";
import Item from "./Item";
import Context from "../context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  return (
    <>
      <div className="container row border mt-3 p-5 mx-auto" id="cart">
        <Context.Consumer>
          {(Consumer) =>
            Consumer.cart.length > 0 ? (
              <>
                <div className="col-9">
                  <Item />
                </div>
                <div className="col-2" >
                  <div id="checkout">
                  <button
                  className="btn btn-primary mt-3 me-auto"
                  onClick={() => Consumer.postCart(Consumer.cart)}
                >
                  Place order
                </button>
                  </div>
               
                </div>
              </>
            ) : (
              <>
                <div className="row">
                  <FontAwesomeIcon
                    icon={faCartArrowDown}
                    size="7x"
                    className="col-2"
                  />
                  <p className="fs-1 col-9">
                    Uh-oh, your cart is <strong>empty</strong>
                  </p>
                </div>
              </>
            )
          }
        </Context.Consumer>
      </div>
    </>
  );
}
