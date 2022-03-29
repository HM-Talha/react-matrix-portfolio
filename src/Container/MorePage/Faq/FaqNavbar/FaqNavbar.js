import React from "react";
import { Link } from "react-router-dom";

import "./FaqBar.css"

const FaqNavbar = () => {
  return (
    <div>
      <section className="faqBarParent">
    
        <div className="d-flex text-white justify-content-center servHeaderCont">
          <p className="home">
            <Link to="/">Home</Link>
          </p>
          <p className="mx-2">,</p>
          <p>TEAM MEMBERS</p>
        </div>
        <div className="webDesign">
          <h1>FAQ</h1>
        </div>
      </section>
    </div>
  );
};

export default FaqNavbar;
