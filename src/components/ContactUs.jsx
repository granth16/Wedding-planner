import React from "react";

const ContactUs = () => {
  return (
    <div className="contactus1">
      <h2>Contact Us</h2>
      <h4>REACH OUT TO US</h4>
      <div className="container">
        <div className="input">
          <form>
            <input className="name" placeholder="Your Name" />
            <input className="email" placeholder="Your Email" />
            <input className="subject" placeholder="Subject" />
            <input className="message" placeholder="Message" />
          </form>

          <button className="send_message">
            <span className="text"> Send message</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
