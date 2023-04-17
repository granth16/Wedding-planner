import React from "react";
import blackbg from "/images/blackbg.png";
import logo from "/svg/logo-icon.svg";
const Footer = () => {
  return (
    <div className="footer">
      <img className="bg" src={blackbg} alt="" />
      <h2>
        Cro{" "}
        <span>
          <img className="logo_icon" src={logo} alt="logo" />{" "}
        </span>
        n<span>Plan</span>
      </h2>
      <span>© 2020 Privacy - Terms</span>
    </div>
  );
};

export default Footer;
