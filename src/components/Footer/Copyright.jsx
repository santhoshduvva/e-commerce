import React from "react";
import "./Footer.css";

const Copyright = () => {
  return (
    <div className="copyrightContainer">
      <span className="footerText">
        In case of any concern,{" "}
        <span style={{ color: "#526cd0", fontWeight: 700 }}>Contact Us</span>
      </span>
      <span className="footerText">
        &copy; 2024 www.myntra.com. All rights reserved.
      </span>
      <span className="footerText">A Flipkart company</span>
    </div>
  );
};

export default Copyright;
