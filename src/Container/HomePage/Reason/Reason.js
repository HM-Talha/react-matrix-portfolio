import React from "react";
import "./Reason.css";
import Img1 from "../../../assets/reason.jpg";
import Img2 from "../../../assets/reason2.jpg";
import Img3 from "../../../assets/reason3.jpg";
const Reason = () => {
  return (
    <div className="my-5 container">
      <section className="container commitParent my-5 d-flex justify-content-around">
        <div className="commitBox">
          <section className="comitLogo">
            <i
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="fa-solid fa-gears"
            />
          </section>
          <section className="commitText">
            We’re committed to create a change that matters
          </section>
        </div>
        <div className="commitBox">
          <section className="comitLogo">
            <i
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="fa-solid fa-laptop-code"
            />
          </section>
          <section className="commitText">
            We’re committed to delliver your work before time
          </section>
        </div>
      </section>

      <section className="resonboxParent ">
        <div className="pl-5 benfitsParents">
          <section className="benefitsTextBox mt-5">
            <p className="p-0 m-0">Our Beniftis</p>
            <h1>Reasons why we are best</h1>
          </section>
          <section className="experienceBoxParent">
            <div className="experienceBox my-2">
              <i className="fa-solid fa-satellite-dish" />
              <p className="para1 pt-2 pr-2">
                The best user interfaces and experience
              </p>
            </div>
            <div className="experienceBox my-2">
              <i className="fa-solid fa-circle-radiation ml-3" />
              <p className="para2 pl-4 pt-2">
                The best user interfaces and experience
              </p>
            </div>
          </section>
          <section className="m-0 p-3 forColor">
            <p>
              Investing in our people is of critical importance as we move
              forward. Asinlabs believes in reinventing itself every few years,
              which is why we have grown over the past four decades. We have
              created a culture that allows us to foster innovation in its
              broader sense and focus on idea generation.
            </p>
          </section>
        </div>

        <div className="d-flex pl-3 mb-5  imgBoxParent">
          <section className=" imgParent1">
            <img src={Img1} width="100%" alt="" />
          </section>
          <section className="ml-2 imgParent2">
            <div className="mb-3 imgBox1">
              <img src={Img2} width="100%" alt="" />
            </div>
            <div className="imgBox2">
              <img src={Img3} width="100%" alt="" />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Reason;
