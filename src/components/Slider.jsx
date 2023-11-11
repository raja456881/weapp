import React, { useEffect, useState } from "react";
import bmw from "../assets/bmw.svg";
import toyota from "../assets/toyota.svg";
import gmc from "../assets/givic.svg";
import mercedes from "../assets/mercedes.svg";
import chevrolet from "../assets/chevrolet.svg";

const Slider = () => {
  const [images, updateImages] = useState([
    bmw,
    toyota,
    gmc,
    mercedes,
    chevrolet,
    bmw,
    toyota,
    gmc,
    mercedes,
    chevrolet,
  ]);
  const getData = async () => {
    let apikey = " 563492ad6f9170000100000186345671b56d4cb5a35f72d49da72409";
    let query = "food";
    let page_num = 1;
    const data = await fetch(
      `https://api.pexels.com/v1/search?query=${query}&page=${page_num}&per_page=20`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: apikey,
        },
      }
    );
    const response = await data.json();
    updateImages(response.photos);
  };
  useEffect(() => {
    // getData();
  }, []);
  return (
    <div className="home_gallery">
      {images.map((el) => {
        return (
          <div>
            <img src={el} alt="alt"></img>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
