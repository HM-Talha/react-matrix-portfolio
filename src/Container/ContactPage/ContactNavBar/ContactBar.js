import React from "react";
import './ContactBar.css'
import "animate.css"
import Logo from "../../../assets/DFgnWp.png";
import { Link } from 'react-router-dom';

const ContactBar = () => {
  return (
    <div className="contactBar mb-5">
     <div className="d-flex text-white justify-content-center servHeaderCont">
        <p className="">
          <Link to="/" exact>Home</Link>
          </p>
        <p className="mx-2">,</p>
        <p>Services Details</p>
      </div>
      <div className="webDesign">
        <h1>Contact US</h1>
        </div>
    </div>
  );
};

export default ContactBar;