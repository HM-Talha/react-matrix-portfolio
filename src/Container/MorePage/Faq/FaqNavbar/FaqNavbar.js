import React from "react";
import { Link } from "react-router-dom";

import "./FaqBar.css";

const FaqNavbar = () => {
  return (
    <div>
      <section className="faqBarParent">
        <div className="d-flex text-white justify-content-center servHeaderCont">
        </div>
        <div className="webDesign animate__animated animate__zoomIn">
          <h1>FAQ</h1>
        </div>
      </section>
    </div>
  );
};

export default FaqNavbar;
