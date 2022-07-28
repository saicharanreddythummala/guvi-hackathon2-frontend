import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to={"/"}>
              Home
            </Link>
            <ul className="navbar-nav ms-md-auto d-flex">
              <li className="nav-item">
                <Link className="nav-link me-5" to={"/contact"}>
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-5" to={"/products"}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-5" to={"/cart"}>
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
