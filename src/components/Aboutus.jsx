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
          <br />
          <h2 className="margin_b">Wedding</h2>

          <div className="about_right_quotes">
            <span>We're here to serve you, step-by-step</span>

            <p>
              Many people create notes on a computer and print them or send them
              through the internet. However, I believe the most effective notes
              are handwritten. A handwritten note is personal and rare. Due to
              this, it will be given more attention.
            </p>

            <p>
              A few weeks ago I was in Michigan for my dad's funeral. While
              there I attended my mom's church on Sunday and met her pastor for
              the second time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
