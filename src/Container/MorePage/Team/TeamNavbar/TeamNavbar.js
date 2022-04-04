import React from "react";
import { Link } from "react-router-dom";

import "./TeamNavbar.css";

const TeamNavbar = () => {
  return (
    <div>
      <section className="teamBarParent mb-5">
        <div className="d-flex text-white justify-content-center servHeaderCont"></div>
        <div className="webDesign animate__animated animate__zoomIn">
          <h1>TEAM MEMBERS</h1>
        </div>
      </section>
    </div>
  );
};

export default TeamNavbar;
