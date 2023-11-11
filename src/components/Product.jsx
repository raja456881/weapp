import React from "react";
import generative from "../assets/generativeparts.svg";
const Product = ({ pic, name }) => {
  return (
    <div className="prod_div">
      <img
        src={pic}
        alt="hjsd"
        style={{
          width: "100%",
          height: "14rem",
        }}
      />
      <div className="prod_title_wrap">
        <p className="prod_title">{name}</p>
      </div>
    </div>
  );
};

export default Product;
