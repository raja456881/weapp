import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import OurProducts from "./Pages/OurProducts";
import Homebanner from "./components/Homebanner";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Certificate from "./Pages/Certificate";
import ContactUs from "./Pages/ContactUs";
const App = () => {
  return (
    <div style={{ width: "100%", height: "100%", overflowX: "hidden" }}>
      <Homebanner />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/product" Component={OurProducts} />
        <Route path="/aboutUs" Component={AboutUs} />
        <Route path="/contactUs" Component={ContactUs} />
        <Route path="/certificate" Component={Certificate} />
      </Routes>
    </div>
  );
};

export default App;
