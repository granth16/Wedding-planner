import React from "react";
import hero from "/images/herobg.png";

const Welcome = () => {
  return (
    <div className="welcome">
      <img src={hero} alt="" />
      <h2>Welcome</h2>
    </div>
  );
};

export default Welcome;
