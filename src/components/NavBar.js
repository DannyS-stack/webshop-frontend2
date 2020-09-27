import React from "react";
import { NavLink } from "react-router-dom";
import "./NavStyles.css";

export default function NavBar() {
  return (
    <div className="topnav">
      <ul className="topnav">
        <li>
          <NavLink style={{ color: "white" }} to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink style={{ color: "white" }} to="/cart">
            Cart
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
