import React from "react";
import Slider from "../components/Slider";
import About from "../components/About";
import WhyBuy from "../components/WhyBuy";
import Products from "../components/Products";
import Homebanner from "../components/Homebanner";
import AboutUs from "./AboutUs";
import Footer from "../components/Footer";
import Certificate from "./Certificate";

const Home = () => {
  return (
    <>
      <AboutUs />
      <WhyBuy />
      <Products />
      <Certificate />
      <Footer />
    </>
  );
};

export default Home;
