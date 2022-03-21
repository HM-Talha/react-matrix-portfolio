import React from "react";
import { Link } from "react-router-dom";

import "./TeamNavbar.css";

const TeamNavbar = () => {
  return (
    <div>
      <section className="teamBarParent mb-5">
   
        <div className="d-flex text-white justify-content-center servHeaderCont">
          <p className="home">
            <Link to="/">Home</Link>
          </p>
          <p className="mx-2">,</p>
          <p>TEAM MEMBERS</p>
        </div>
        <div className="webDesign">
          <h1>About</h1>
        </div>
      </section>
    </div>
  );
};

export default TeamNavbar;
