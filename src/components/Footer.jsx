import React from "react";
import member1 from "../assets/member1.svg";
import member2 from "../assets/member2.svg";
import member3 from "../assets/member3.svg";
import since from "../assets/since1925.svg";
import unparallel from "../assets/unparallel.svg";
import satisfy from "../assets/satisfy.svg";
import footerBg from "../assets/IMAGE.png";
import ContactUs from "../Pages/ContactUs";
import "../../src/App.css";

const Footer = () => {
  return (
    <div className="parent">
      <div className="upppperDiv">
        <ContactUs />
      </div>

      <div className="lowerDiv">
        <div className="footer_wrapper">
          <div className="footer_items">
            {/* <div>
              <ul className="footer_addres_ul">
                <li className="footer_addres">Capital Bolts and Hardware</li>
                <li className="footer_addres">
                  Capital tower, opp. sbi, gill road, ludhiana - 141003
                </li>
                <li className="footer_addres">+91 98880-21000</li>
                <li className="footer_addres">Einfo@airlineautoparts.net</li>
              </ul>
            </div>
            <div>
              <ul className="footer_links_ul">
                <li className="footer_links">About Us</li>
                <li className="footer_links">Part Search</li>
                <li className="footer_links">News</li>{" "}
                <li className="footer_links">Contact</li>
                <li className="footer_links">Testimonials</li>
                <li className="footer_links">Tax form</li>
              </ul>
            </div>
            <div>
              <ul className="footer_policies_ul">
                <li className="footer_policies">Privacy Policy</li>
                <li className="footer_policies">Warranty</li>
                <li className="footer_policies">Returns / Refunds</li>
                <li className="footer_policies">Shipping / Delivery</li>
              </ul>
            </div> */}
            <div style={{ width: "200px" }}>
              <p>Dynamics Werx Limited</p>
              <p className="footer_p">
                10 Pield Health Avenue Uxbridge UB8 3PB UK
              </p>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© 2019 Copyright © Airline Auto Parts. ® All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
