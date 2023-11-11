
import {React, useEffect} from "react";
import img1 from "../assets/img.svg";
import parts from "../assets/parts.svg";
import delivery from "../assets/delivery.svg";
import recycled from "../assets/recycled.svg";
const AboutUs = () => {
  
  
  useEffect(() => {
    window.scrollTo({top:705, left:0, behavior:"smooth"})
  }, []);

  
  
  return (
    <>
      <div className="about-us-wrap">
        <div className="about_us_heading">About Us</div>
        <p className="aboutus_para">
        Dynamics Werk Limited specializes in creating 2D & 3D CAD designs for metal parts, metal structures, general purpose machined parts and Hardware Our expert team of manufacturers based worldwide specialize in locating designs for Mechanical parts and produce or 
        </p>
        <p className="aboutus_para">
        re-produce parts as per the Military or Non-Military specifications required by the end-user We source specialized shops to engineer components as per Military or non-Military specifications.
        </p>
      </div>
      {/* images  */}
      <div className="images_wrap">
        <div className="image_item">
          <img src={img1} alt="about" height={250} width={250}></img>
          <h3 className="inner_text">30+ Years experience</h3>
        </div>
        <div className="image_item">
          <img src={parts} alt="about" height={250} width={250}></img>
          <h3 className="inner_text">parts availablity</h3>
        </div>
        <div className="image_item">
          <img src={delivery} alt="about" height={250} width={250}></img>
          <h3 className="inner_text">delivery local</h3>
        </div>
        <div className="image_item">
          <img src={recycled} alt="about" height={250} width={250}></img>
          <h3 className="inner_text">why buyrecycled?</h3>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
