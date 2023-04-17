import { Button } from "@material-ui/core";
import React from "react";

const ContactUs = () => {
  return (
    <div className="contactus">
      <h2>Contact Us</h2>
      <h4>REACH OUT TO US</h4>
      <form>
        <div className="input">
          <input className="name" placeholder="Your Name" />
          <input className="email" placeholder="Your Email" />
          <input className="subject" placeholder="Subject" />
          <input className="message" placeholder="Message" />
        </div>
      </form>
      <button className="send_message">Send message</button>
    </div>
  );
};

export default ContactUs;
