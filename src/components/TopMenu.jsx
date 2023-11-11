import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // You can choose icons from React Icons
import { Link, Outlet, useLocation } from "react-router-dom";
import "../App.css";
const TopMenu = () => {
  const location = useLocation();
  const [scroll, setScroll] = useState(0);
  window.addEventListener("scroll", function () {
    setScroll(this.window.scrollY);
  });

  const [isResponsive, setIsResponsive] = useState(false);

  const handleToggleMenu = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <div>
      <div
        class="header"
        style={{ background: scroll > 2 ? "white" : "transparent" }}
      >
        <a href="#default" class="logo">
        </a>
        <div class="header-right">
          <div className="menu_item">
            <Link
              to="/"
              style={{
                color: scroll > 2 ? "black" : "white",
                textDecoration:
                  location.pathname === "/" ? "underline" : "none",
              }}
            >
              Home
            </Link>
          </div>
          <div className="menu_item">
            <Link
              to="/aboutUs"
              style={{
                color: scroll > 2 ? "black" : "white",
                textDecoration:
                  location.pathname === "/aboutUs" ? "underline" : "none",
              }}
            >
              About Us
            </Link>
          </div>
          <div className="menu_item">
            <Link
              to="/contactUs"
              style={{
                color: scroll > 2 ? "black" : "white",
                textDecoration:
                  location.pathname === "/contactUs" ? "underline" : "none",
              }}
            >
              Contact Us
            </Link>
          </div>
          <div className="menu_item">
            <Link
              to="/certificate"
              style={{
                color: scroll > 2 ? "black" : "white",
                textDecoration:
                  location.pathname === "/certificate" ? "underline" : "none",
              }}
            >
              Certificate
            </Link>
          </div>
          <div className="menu_item">
            <Link
              to="/product"
              style={{
                color: scroll > 2 ? "black" : "white",
                textDecoration:
                  location.pathname === "/product" ? "underline" : "none",
              }}
            >
              Our Products
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default TopMenu;
