import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  const URL = "http://localhost:4000/"
  //function to fetch categories
  const fetchProductData = async () => {
    const res = await axios.get(`${URL}categories`);
    setCategories(res.data);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <p className="fs-1 text-center">Categories</p>
        <div className="row">
          {categories.map((product) => (
            <div className="col mb-5"  key={product._id}>
              <div
                className="card h-100 d-flex flex-column justify-content-center"
               
              >
                <img
                  className="card-img-top"
                  src={product.img}
                  alt="..."
                  style={{ height: "200px" }}
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{product.detail}</h5>
                    {product.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
