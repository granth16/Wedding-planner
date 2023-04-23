import React from "react";
import logo from "/svg/checklist-icon.svg";
const WeddingPlanning = () => {
  return (
    <div>
      <div className="header">
        <h4>WEDDING PLANNING</h4>
        <h2>Services</h2>
      </div>
      <div className="container">
        <div className="item">
          <div className="item-left">
            <img className="image" src={logo} alt="" />
          </div>
          <div className="item-right">
            <span>Checklist</span>
            <p>
              The ultimate wedding checklist to make sure everything gets done
            </p>
          </div>
        </div>
        <div className="item">
          <div className="item-left">
            <img className="image" src={logo} alt="" />
          </div>
          <div className="item-right">
            <span>Checklist</span>
            <p>
              The ultimate wedding checklist to make sure everything gets done
            </p>
          </div>
        </div>
        <div className="item">
          <div className="item-left">
            <img className="image" src={logo} alt="" />
          </div>
          <div className="item-right">
            <span>Checklist</span>
            <p>
              The ultimate wedding checklist to make sure everything gets done
            </p>
          </div>
        </div>
        <div className="item">
          <div className="item-left">
            <img className="image" src={logo} alt="" />
          </div>
          <div className="item-right">
            <span>Checklist</span>
            <p>
              The ultimate wedding checklist to make sure everything gets done
            </p>
          </div>
        </div>
        <div className="item">
          <div className="item-left">
            <img className="image" src={logo} alt="" />
          </div>
          <div className="item-right">
            <span>Checklist</span>
            <p>
              The ultimate wedding checklist to make sure everything gets done
            </p>
          </div>
        </div>
        <div className="item">
          <div className="item-left">
            <img className="image" src={logo} alt="" />
          </div>
          <div className="item-right">
            <span>Checklist</span>
            <p>
              The ultimate wedding checklist to make sure everything gets done
            </p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className="bookservice">
          <span className="button1">BOOK SERVICE</span>
        </button>
        <button className="contactus">
          <span className="button2">CONTACT US</span>
        </button>
      </div>
    </div>
  );
};

export default WeddingPlanning;
