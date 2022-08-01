import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";

export default function Products({ onAdd, onRemove }) {
  const URL = "http://localhost:4000/";

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [current, setCurrent] = useState("");

  //function to fetch all products
  const fetchProducts = async () => {
    const res = await axios.get(`${URL}products`);
    const data = res.data;
    setProducts(data);
  };

  //function to fetch products based on category
  const fetchCategories = async () => {
    const res = await axios.get(`${URL}categories`);
    const data = res.data;
    setCategories(data);
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  //function to fetch products based on category filter
  const onFilter = async (e) => {
    let res = [];
    if (e.target.textContent === "All Products") {
      res = await axios.get(`${URL}products`);
    } else {
      setCurrent(e.target.textContent);
      res = await axios.get(`${URL}products/?category=${e.target.textContent}`);
    }
    setProducts(res.data);
  };

  //function to fetch products based on search input
  const onSearch = async (e) => {
    const res = await axios.get(`${URL}products/?search=${e.target.value}`);
    setProducts(res.data);
  };

  return (
    <>
      <div className="container">
        <div>
          <p className="fs-1 text-center pt-3">All Products</p>
        </div>
        <div className="row">
          <div className="input-group mb-3 col">
            <input
              type="text"
              className="form-control"
              placeholder="Search Products"
              aria-label="Search Products"
              aria-describedby="basic-addon1"
              onChange={onSearch}
            />
          </div>
          <div className="dropdown col d-flex justify-content-center">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" onClick={onFilter}>
                  All Products
                </a>
              </li>
              {categories.map((ele) => {
                return (
                  <li key={ele._id}>
                    <a className="dropdown-item" onClick={onFilter}>
                      {ele.category}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="row mt-5">
          {products.map((product) => (
            <Card product={product} key={product._id} />
          ))}
        </div>
      </div>
    </>
  );
}
