import React from "react";
import "./imgslider.css";

const Home = () => {
  return (
    <div className="banner-container">
      <div className="slider">
        <div
          className="slide"
          style={{ backgroundImage: "url(image1.jpg)" }}
        ></div>
        <div
          className="slide"
          style={{ backgroundImage: "url(image2.jpg)" }}
        ></div>
        <div
          className="slide"
          style={{ backgroundImage: "url(image3.jpg)" }}
        ></div>
        <div
          className="slide"
          style={{ backgroundImage: "url(image4.jpg)" }}
        ></div>
      </div>
      <div className="search-bar-container">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Home;
