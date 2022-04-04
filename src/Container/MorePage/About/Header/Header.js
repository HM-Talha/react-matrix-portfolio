import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <section className="abouPageParent mb-5">
      <div className="d-flex text-white justify-content-center servHeaderCont"></div>
      <div className="webDesign animate__animated animate__zoomIn">
        <h1>About</h1>
      </div>
    </section>
  );
};

export default Header;
