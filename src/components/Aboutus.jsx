import React from "react";
import bg from "/images/aboutusbg.png";
import left_arrow from "/svg/left_arrow.svg";
import right_arrow from "/svg/right_arrow.svg";
const Aboutus = () => {
  return (
    <div className="aboutus">
      <h3>ABOUT US</h3>
      <div className="aboutus_body">
        <div className="about_left">
          <img src={bg} alt="" />
        </div>
        <div className="about_right">
          <h2>Let's Plan Your Perfect</h2>
          <br></br>
          <h2>Wedding</h2>
          <br></br>
          <span>We're here to serve you, step-by-step</span>
          <br />
          <br />
          <span>
            Many people create notes on a computer and print them or send them
          </span>
          <br />
          <span>
            through the internet.However I believe the most effective notes are
          </span>
          <br />
          <span>
            handwritten.A handwritten note is personal and rare.Due to this, it
            will be
          </span>
          <br />
          <span>given more attention</span>
          <br /> <br />
          <span>
            A few weeks ago I was in Michigan for my dad's funeral.While there I
          </span>
          <br />
          <span>
            attended my mom's church on Sunday and met her pastor for the second
          </span>
          <span>time.</span>
        </div>
      </div>
      <div className="arrow">
        <div className="arrowleft">
          <img src={left_arrow} alt="" />
        </div>
        <div className="arrowright">
          <img src={right_arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
