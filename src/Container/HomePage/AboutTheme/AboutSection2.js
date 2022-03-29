import React, { useEffect, useState } from "react";
import Logo from "../../../assets/DFgnWp.png";
import "./AboutSection2.css";

function AboutSection2() {
  const [scroll, setScroll] = useState(false);
  const setWidth = () => {
    if (
      window.scrollY >= 2200.77783203125
    ) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", setWidth);

  return (
    <section className="aboutMainParent mb-5 mt-5">
      <div className="abtParent p-3">
        <div className="container aboutCont1">
          <section>
            <p className="p-0 m-0 paraTextAbout2">Corporate Buisness theme</p>
            <h1 className="my-3">We make the quality design & developments</h1>
          </section>
          <section className="d-flex">
            <img src={Logo} data-aos="zoom-in-up" width="120px" alt="" />
            <p className="my-auto matrix">Matrix Tech..</p>
          </section>
        </div>
        <div className="aboutCont2 container mt-4 ">
          <div className="mx-auto  ">
            <p className="  percentText m-0 p-0 mt-3 mb-2">
              Website design & Development <span>95%</span>
            </p>
            <div className=" percContainer">
              <section className={scroll ? "setWidth" : "setClr"}> </section>
            </div>
          </div>
          <div>
            <p className=" percentText m-0 p-0 mt-3 mb-2">
              Mobile App Design & development <span>90%</span>
            </p>
            <div className=" percContainer">
              <section className={scroll ? "setGraphicAndWeb" : "setClr"}>
                {" "}
              </section>
            </div>
          </div>
          <div>
            <p className=" percentText m-0 p-0 mt-3 mb-2">
              Graphic Designing <span>90%</span>
            </p>
            <div className=" percContainer">
              <section className={scroll ? "setGraphicAndWeb" : "setClr"}>
                {" "}
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection2;
