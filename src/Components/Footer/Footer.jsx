import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/imgs/Name-logo.png";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>
          I am a web developer specializing in front-end development, based in Chennai,
           with expertise in HTML, CSS, JavaScript, React.js, and building responsive web applications.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Madhan. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p><a href="#home">Connect with me</a></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
