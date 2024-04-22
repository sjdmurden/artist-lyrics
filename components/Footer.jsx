import React from "react";
import "../src/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <FontAwesomeIcon icon={faCopyright} /> All songs and lyrics owned by Skam
    </div>
  );
};

export default Footer;
