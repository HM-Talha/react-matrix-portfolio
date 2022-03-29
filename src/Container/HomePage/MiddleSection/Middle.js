import React, { useEffect } from "react";
import "./Middle.css";
import Welcome from "../../../assets/welcome-one-img-1.png";
import "aos/dist/aos.css";

const Middle = () => {
  return (
    <div className=" pt-5 middleParent">
      <div className="firsrParent">
        <section
          className="imgContainer p-3"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img src={Welcome} width="100%" />
        </section>
      </div>
      <div className="secParent">
        <section data-aos="zoom-in" data-aos-duration="2000">
          <p className="aboutPara m-0 p3">About company</p>
          <h1 className="aboutText">
            Our Vision is to achieve 100% customer satisfaction by delivering
            quality products and services at an affordable cost.
          </h1>
        </section>
        <section
          className="mt-5 myText d-flex"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <p className="solutionText">
            <i className="fa-solid fa-check mr-3" />
            <span>Solution for small & large businesses</span>
          </p>
          <p className="solutionText mx-4">
            <i className="fa-solid fa-check mr-3" />
            <span>Solution for all kind of agencies & businesses</span>
          </p>
        </section>
        <section
          className="middleBottomText"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <h4 className="my-5">
            We take care of all the technology so you can focus on what you do
            best.
          </h4>
          <p>
            Our forward vision is to strive to become an entity in technology
            based corporate solutions, capable of demanding unconditional
            response from the targeted niche. We also believe that for our scope
            of improvisation – sky is the limit and we are always ready to take
            our achievements to the next level.
          </p>
        </section>
      </div>
    </div>
  );
};
export default Middle;
