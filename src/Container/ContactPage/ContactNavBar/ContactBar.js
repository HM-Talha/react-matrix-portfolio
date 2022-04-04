import React from "react";
import "./ContactBar.css";
import "animate.css";
import Logo from "../../../assets/DFgnWp.png";
import { Link } from "react-router-dom";

const ContactBar = () => {
  return (
    <div className="contactBar mb-5">
      <div className="d-flex text-white justify-content-center servHeaderCont">
        <p className="animate__animated animate__zoomIn">Services Details</p>
      </div>
      <div className="webDesign animate__animated animate__zoomIn">
        <h1>Contact US</h1>
      </div>
    </div>
  );
};

export default ContactBar;
