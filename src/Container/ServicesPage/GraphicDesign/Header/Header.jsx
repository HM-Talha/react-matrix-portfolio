import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <section className="graphicParent mb-5">

      <div className="d-flex text-white justify-content-center servHeaderCont">
        <p className="home">
          <Link to="/">Home</Link>
        </p>
        <p className="mx-2">,</p>
        <p>Services Details</p>
      </div>
      <div className="webDesign">
        <h1>Graphic Designing</h1>
      </div>

    </section>
  );
};

export default Header;
