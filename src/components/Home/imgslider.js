import React, { useEffect, useState } from "react";
import "./imgslider.css";
import image1 from "../Assets/Images/banner1.svg";
import image2 from "../Assets/Images/banner2.svg";
import image3 from "../Assets/Images/banner3.svg";
import image4 from "../Assets/Images/banner4.svg";

const ImgSlider = () => {
  const images = [image1, image2, image3, image4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="banner-container">
      <div
        className="slider"
        style={{ transform: `translateX(${-currentImageIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="slide"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <div className="search-bar-container">
        {}
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </div>
  );
};

export default ImgSlider;
