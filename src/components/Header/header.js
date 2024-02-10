import "../Header/header.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { PiShoppingBagOpen } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa6";

import logo from "../Assets/Images/Logo.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handlescrool = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handlescrool);
  }, []);
  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`} />

      <div className="nav-bar">
        <div className="logo">
          <img src={logo} alt=""></img>
        </div>
        <div className="navigation-buttons">
          <Link to="/">
            <button className="btn">Home</button>
          </Link>
          <Link>
            <button className="btn">Categories</button>
          </Link>
          <Link>
            <button className="btn">About Us</button>
          </Link>
          <Link>
            <button className="btn">Contact Us</button>
          </Link>
        </div>
        <div className="icons">
          <div className="ic">
            <FaSearch />
          </div>
          <div className="ic">
            <FaRegUser />
          </div>
          <div className="ic">
            <FaRegHeart />
          </div>
          <div className="ic">
            <PiShoppingBagOpen />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
