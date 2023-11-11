import React from "react";
import TopMenu from "./TopMenu";
import Header from "./Header";
const Homebanner = () => {
  return (
    <>
      <div className="home_banner">
        <div className="backdrop">
          {/* <TopMenu /> */}
          <Header/>
          <div className="front_content">
            <h2 className="bold_heading">
            Our all major products which are developed with superior quality & Technology
            </h2>
            <h4 className="sub_heading_home">
              Friendly & Professional Service
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homebanner;
