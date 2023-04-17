import React from "react";
import logo from "/svg/logo-icon.svg";

const Header = () => {
  return (
    <nav className="nav">
      <div className="nav_inner">
        <div className="nav_left">
          <h2>
            Cro{" "}
            <span>
              <img className="logo_icon" src={logo} alt="logo" />{" "}
            </span>
            n<span>Plan</span>
          </h2>
        </div>
        <div className="nav_right">
          <ul>
            <li>Home</li>
            <li>Portfolio</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
