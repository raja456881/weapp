import React from "react";
import barometer from "../assets/barometer.svg";
import cockpit from "../assets/cockpit.svg";
// import welding from "../assets/welding.svg";
const WhyBuy = () => {
  return (
    <>
      <div className="why_buy_wrap">
        <div className="text_side">
          <div className="wb_main_heading">Why Buy From Us?</div>
          <p className="wb_sub_heading">Peace of Mind</p>
          <p className="wb_para">
            Our team is driven by professionalism and inspired by the passion to
            design and develop the best. We keep on scouting the market for the
            top class metal parts design and fabrication solutions and bring for
            your worthy deals The products we develop not only deliver aesthetic
            value to the ambience but are also optimized for functionality
          </p>
        </div>
        <div className="image_side">
          <div className="barometer_image">
            <img
              className=" img"
              src={barometer}
              alt="barometer"
              height={190}
              width={200}
              style={{ borderRadius: "30px", marginRight: "30px" }}
            />
          </div>
          <div className="cockpit_img">
            <img
              src={cockpit}
              alt="cockpit"
              height={350}
              width={450}
              style={{ borderRadius: "30px", marginRight: "30px" }}
            />
          </div>
          <div className="welding_img">
            <img
              className=" img"
              src={barometer}
              alt="welding"
              height={190}
              width={200}
              style={{ borderRadius: "30px", marginRight: "30px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyBuy;
