import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import "./header.css";

const HeaderCont = () => {
  return (
    <section className="header">
      <div className="headerContent  ml-4 pb-3">
        <h1 className="text animate__animated animate__zoomIn">
          PERFECTIONISM VS OBSESSION
        </h1>
        <p className="paraText animate__animated animate__zoomIn">
          There’s A Fine Line Between Perfectionism And Obsession. We Don’t See
          It
        </p>
        <button className="mt-3 btn btn-primary btn animate__animated animate__zoomIn">
          <Link to={"/contact"}><span className="emailText">Contact Us</span></Link>
        </button>{" "}
        <button className="mt-3 btn mx-2 btn-primary btn animate__animated animate__zoomIn">
          <a href="mailto:matrix.tech78@gmail.com">
            <span className="emailText">Email </span>
          </a>
        </button>
      </div>
    </section>
  );
};

export default HeaderCont;
