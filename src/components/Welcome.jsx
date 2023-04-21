import React from "react";
import hero from "/images/herobg.png";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome_inner">
        <div className="welcome_left">
          <div className="welcome_left_top">
            <span>WELCOME</span>
          </div>
          <div className="welcome_left_bottom">
            <p> Wedding Planner</p>
          </div>

          <button className="btn_more">LEARN MORE</button>
        </div>
        <div className="welcome_right">
          <div className="welcome_right_quote">
            <p>
              The #1 ranked. Helped over 50,000 couples around the country and
              we look forward to supporting you along your wedding planning
              journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
