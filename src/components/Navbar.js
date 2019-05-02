import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav
        className="navbar
      navbar-expand-sm bg-primary navbar-dark"
      >
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <button>
            <i className="fas fa-cart-plus" />
            Mycart
          </button>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
