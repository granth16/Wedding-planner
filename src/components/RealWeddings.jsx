import React from "react";
import nicole from "/images/nicole.png";
import ibrahim from "/images/ibrahim.png";
import damilare from "/images/damilare.png";
const RealWeddings = () => {
  return (
    <div className="real_weddings">
      <h3>Real Weddings</h3>
      <h5>OUR AMAZING WORK</h5>
      <div className="images">
        <div className="images1">
          <img src={nicole} alt="" />
          <span>Nicole and Michael</span>
        </div>
        <div className="images1">
          <img src={ibrahim} alt="" />
          <span>Ibrahim and Aishat</span>
        </div>
        <div className="images1">
          <img src={damilare} alt="" />
          <span>Damilare and Kemisola</span>
        </div>
      </div>
      <button className="viewweddings">View Weddings</button>
    </div>
  );
};

export default RealWeddings;
