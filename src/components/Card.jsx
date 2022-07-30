import React from "react";
import Context from "../context/Context";

export default function Card({ product }) {
  return (
    <>
      <div className="card col-2 me-4 mb-3">
        <img
          src={product.img}
          alt={product.detail}
          className="card-img-top"
          style={{ height: "150px" }}
        />
        <div className="card-body">
          <p className="fs-3">{product.detail}</p>
          <p>₹{product.price}</p>
          {/* using context global function */}
          <Context.Consumer>
            {(consumer) => (
              <button
                className="btn btn-light border button-cart-design"
                onClick={() => {
                  consumer.onAdd(product);
                }}
              >
                Add to cart
              </button>
            )}
          </Context.Consumer>
        </div>
      </div>
    </>
  );
}
