import React from "react";
import Hero from "./Hero";
import "./home.css";
import Products from "./Products";
import Inspiration from "./Inspiration";
const Home = () => {
  return (
    <div className="home-main">
      <Hero />
      <Products />
      <Inspiration />
    </div>
  );
};

export default Home;
