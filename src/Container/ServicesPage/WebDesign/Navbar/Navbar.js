import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const ServiceNavbar = () => {
  return (
    <div className="servHeader mb-5">
      <div className="d-flex text-white justify-content-center servHeaderCont animate__animated animate__zoomIn">
        <p>Services Details</p>
      </div>
      <div className="webDesign animate__animated animate__zoomIn">
        <h1>Website design</h1>
      </div>
    </div>
  );
};

export default ServiceNavbar;
