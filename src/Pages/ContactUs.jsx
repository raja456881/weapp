import {React, useEffect} from "react";
import "../App.css";
import contactImg from "../assets/unsplash_TyanDMPxwHc.png";
const ContactUs = () => {

  useEffect(() => {
    window.scrollTo({top:915, left:0, behavior:"smooth"})
  }, []);

  return (
    <div className="contact_box">
      <div className="contact_container">
        <div className="contact_img">
          <img src={contactImg} alt="" />
        </div>
        <div className="contact_info">
          <div className="info">
            <h3 className="contact_h3">Contact Us</h3>

            <div className="info_container">
              <input
                className="info_inputs"
                type="text"
                name=""
                id=""
                placeholder="Full Name"
              />
            </div>
            <div className="info_container">
              <input
                className="info_inputs"
                type="text"
                name=""
                id=""
                placeholder="E-mail"
              />
            </div>
            <div className="info_container">
              <input
                className="info_inputs"
                type="text"
                name=""
                id=""
                placeholder="Message"
              />
            </div>

            <button className="contact_btn">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
