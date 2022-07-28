import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  const fetchProductData = async () => {
    const res = await fetch(
      "http://localhost:4000/categories"
    );
    const data = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchProductData();
  }, {});
  return (
    <>
      <div className="container-fluid">
        <p className="fs-1 text-center">Categories</p>
        <div className="row">     
        {
        categories.map(product=>(
            <div className="col mb-5">
            <div className="card h-100 d-flex flex-column justify-content-center" key={product._id}>
              <img
                className="card-img-top"
                src={product.img}
                alt="..."
                style={{height:'200px'}}
              />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{product.detail}</h5>
                  {product.category}
                </div>
              </div>
            </div>
          </div>
        ))
     }
     {/* <Card products={categories}/> */}
        </div>
      </div>
    </>
  );
}
