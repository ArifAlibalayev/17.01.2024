import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav id="navHeader">
        <div className="icon">
          <h2>Selling</h2>
          <span>.</span>
        </div>
        <div className="responsiveMenu">
        <i class="fa-solid fa-bars"></i>
        </div>
        <div className="navBtns">
          <ul>
            <NavLink
              to={"/"}
              className={true ? "pendingNavLink" : "activeNavLink"}>
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/Add"}
              className={true ? "pendingNavLink" : "activeNavLink"}>
              <li>Add</li>
            </NavLink>
            <NavLink
              to={"/Basket"}
              className={true ? "pendingNavLink" : "activeNavLink"}>
              <li>Basket</li>
            </NavLink>
            <NavLink
              to={"/Wishlist"}
              className={true ? "pendingNavLink" : "activeNavLink"}>
              <li>Wishlist</li>
            </NavLink>
            <NavLink
              to={"/"}
              className={true ? "pendingNavLink" : "activeNavLink"}>
              <li>About</li>
            </NavLink>
            <NavLink
              to={"/"}
              className={true ? "pendingNavLink" : "activeNavLink"}>
              <li>Contact</li>
            </NavLink>
            <NavLink
              to={"/"}
              className={true ? "pendingNavLink" : "activeNavLink"}>
              <li>Blog</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
