import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <nav className="navbar sticky-top navbar-expand-sm py-2">
      <div className="container">
        <NavLink className="navbar-brand text-black fs-4" to="#">
          FAKESHOP
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item m-1">
              <NavLink
                className="nav-link active text-black"
                aia-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item m-1">
              <NavLink className="nav-link text-black" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item m-1">
              <NavLink className="nav-link text-black" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item m-1">
              <NavLink className="nav-link text-black" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons">
            <NavLink to="/login" className="btn btn-outline-dark mx-2">
              Login
            </NavLink>
            <NavLink to="/register" className="btn btn-outline-dark mx-2">
              Sign Up
            </NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark mx-2">
              Cart ({state.length})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
