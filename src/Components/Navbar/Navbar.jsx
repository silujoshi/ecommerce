import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="no image" />
        <p>Situ_pasah</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            {" "}
            Shop
          </Link>

          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Women");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/Women">
            Women
          </Link>
          {menu === "Women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Accessories");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/Accessories">
            Accessories
          </Link>
          {menu === "Accessories" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("More");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/More">
            {" "}
            More
          </Link>
          {menu === "More" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>
          <Link to="/Login">Login</Link>
        </button>
        <Link to="/Cart">
          <img src={cart_icon} alt="no image" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
