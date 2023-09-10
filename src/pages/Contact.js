import React from "react";
import BannerImage from "../assets/2blackbean.jpg";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftside"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightside">
        <h1>Contact Us</h1>
        <form id="contact-form">
          <label htmlFor="name">Full name</label>
          <input name="name" placeholder="Enter Full Name" type="text" />
          <label htmlFor="email">Email</label>
          <input name="name" placeholder="Enter an email" type="email" />
          <label htmlFor="mesage">Full name</label>
          <textarea name="mesage" placeholder="Enter your message"></textarea>
          <button type="submit">Send Mesage</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
