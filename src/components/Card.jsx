import React from "react";
import { useState } from "react";

export default function Card({ product, onAdd, onRemove }) {
  const [add, setAdd] = useState(true);

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
            <button
              className="btn btn-light border button-cart-design"
              onClick={() => {
                onAdd(product);
              }}
            >
              Add to cart
            </button>
        </div>
      </div>
    </>
  );
}
