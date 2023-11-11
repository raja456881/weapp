import React from "react";
import { useEffect } from "react";
import certificate from "../assets/certificate.jpg";
import "./style.css";

const Certificate = () => {

  useEffect(() => {
    window.scrollTo({top:915, left:0, behavior:"smooth"})
  }, []);


  return (
    <div className="certificate_container" style={{}}>
      <img className="certificate_img" src={certificate} alt="" style={{}} />
    </div>
  );
};

export default Certificate;
