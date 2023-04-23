import React from "react";
import logo from "/svg/logo-icon.svg";
import logo1 from "/svg/facebook-icon.svg";
import logo2 from "/svg/insta-icon.svg";
import logo3 from "/svg/facebook-icon.svg";
import logo4 from "/svg/insta-icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <h2>
          Cro{" "}
          <span>
            <img className="logo_icon" src={logo} alt="logo" />{" "}
          </span>
          n<span>Plan</span>
        </h2>
        <span>© 2020 Privacy - Terms</span>
      </div>
      <div className="footer_middle">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
      </div>
      <div className="footer_right">
        <ul>
          <span>About</span>
          <li>Facts</li>
          <li>Terms and Conditions</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
