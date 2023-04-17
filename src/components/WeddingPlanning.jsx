import React from "react";
import checklist from "/svg/checklist-icon.svg";

const WeddingPlanning = () => {
  return (
    <div className="wp">
      <h3>WEDDING PLANNING</h3>
      <br /> <br />
      <h2>Services</h2>
      <br /> <br /> <br />
      <div className="services">
        <div className="service1">
          <div className="icon">
            <img src={checklist} alt="" />
          </div>
          <div className="desc">
            <h4>Checklist</h4>
            <br />
            <p>The ultimate wedding checklist</p>
            <p>to make sure everything gets done</p>
          </div>
        </div>
        <div className="service1">
          <div className="icon">
            <img src={checklist} alt="" />
          </div>
          <div className="desc">
            <h4>Checklist</h4>
            <br />
            <p>The ultimate wedding checklist</p>
            <p>to make sure everything gets done</p>
          </div>
        </div>
        <div className="service1">
          <div className="icon">
            <img src={checklist} alt="" />
          </div>
          <div className="desc">
            <h4>Checklist</h4>
            <br />
            <p>The ultimate wedding checklist</p>
            <p>to make sure everything gets done</p>
          </div>
        </div>

        <div className="service1">
          <div className="icon">
            <img src={checklist} alt="" />
          </div>
          <div className="desc">
            <h4>Checklist</h4>
            <br />
            <p>The ultimate wedding checklist</p>
            <p>to make sure everything gets done</p>
          </div>
        </div>
        <div className="service1">
          <div className="icon">
            <img src={checklist} alt="" />
          </div>
          <div className="desc">
            <h4>Checklist</h4>
            <br />
            <p>The ultimate wedding checklist</p>
            <p>to make sure everything gets done</p>
          </div>
        </div>
        <div />

        <div className="service6">
          <div className="icon">
            <img src={checklist} alt="" />
          </div>
          <div className="desc">
            <h4>Checklist</h4>
            <br />
            <p>The ultimate wedding checklist</p>
            <p>to make sure everything gets done</p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button color="white" className="bookservice">
          BOOK SERVICE
        </button>
        <button color="red" className="contactus">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default WeddingPlanning;
