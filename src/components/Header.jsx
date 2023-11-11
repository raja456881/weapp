import React, { useEffect, useState } from "react";
import whiteTriangle from "../assets/Rectangle 48.png";
import logo from "../assets/Screenshot 2023-10-12 at 11.06 1.png";
import blueTriangle from "../assets/Rectangle 49.png";
import "../../src/App.css";
import { Link, Outlet, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [scroll, setScroll] = useState(0);
  // window.addEventListener("scroll", function () {
  //   setScroll(this.window.scrollY);
  // });

  // useEffect(() => {
  //   window.scrollTo({ top: 705, left: 0, behavior: "smooth" });
  // }, []);
  return (
    <div>
      <div className="header_container">
        <div>
          <div className="logo">
            <img src={whiteTriangle} alt="" />
          </div>
          <div className="logo_img">
            <img src={logo} alt="" />
          </div>
          <div className="blue_triangle">
            <img src={blueTriangle} alt="" />
          </div>
        </div>
        <div class="link_box">
          <div>
            <Link
              className="header_links"
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
          <div>
            <Link
              className="header_links"
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
          <div>
            <Link
              className="header_links"
              to="/aboutUs"
              style={{
                color: scroll > 2 ? "black" : "white",
                textDecoration:
                  location.pathname === "/aboutUs" ? "underline" : "none",
              }}
            >
              About
            </Link>
          </div>
          <div>
            <Link
              className="header_links"
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
          <div>
            <Link
              className="header_links"
              to="/contactUs"
              style={{
                color: scroll > 2 ? "black" : "white",
                textDecoration:
                  location.pathname === "/contactUs" ? "underline" : "none",
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
