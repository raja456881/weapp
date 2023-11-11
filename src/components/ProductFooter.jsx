import React from "react";
import img1 from "../assets/IMAGE (1).png";
import img2 from "../assets/IMAGE (2).png";
import img3 from "../assets/IMAGE (3).png";
const ProductFooter = () => {
  return (
    <div>
      <div>
        <div className="product_footer_wrapper">
          <div className="footer_items">
            <div>
              <ul className="footer_addres_ul">
                <li className="footer_addres">Capital Bolts and Hardware</li>
                <li className="footer_addres">
                  Capital tower, opp. sbi, gill road, ludhiana - 141003
                </li>
                <li className="footer_addres">+91 98880-21000</li>
                <li className="footer_addres">Einfo@airlineautoparts.net</li>
                <li className="footer_member">Proud Member</li>
                <div>
                  <img src={img1} alt=""  className="member_img"/>
                  <img src={img2} alt=""  className="member_img"/>
                  <img src={img3} alt="" className="member_img" />
                </div>
              </ul>
            </div>
            <div>
              <ul className="footer_links_ul">
                <li className="footer_links">About Us</li>
                <li className="footer_links">Part Search</li>
                <li className="footer_links">News</li>
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

export default ProductFooter;
