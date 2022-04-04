import React from "react";
import ReasonImg from "../../../../assets/reason.jpg";
import "./Reason.css";

const Reason = () => {
  return (
    <section className="container reasonParent">
      <div className="reasonChild1">
        <img
          src={ReasonImg}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          alt=""
          width="100%"
        />
      </div>
      <div className="reasonChild2">
        <section className="subChildReason2" data-aos="fade-up">
          <p className="benefits">Our Benfits</p>
          <h5>Reasons why we are best</h5>
          <p>
            Investing in our people is of critical importance as we move
            forward. Asinlabs believes in reinventing itself every few years,
            which is why we have grown over the past four decades. We have
            created a culture that allows us to foster innovation in its broader
            sense and focus on idea generation. .
          </p>
        </section>
        <section data-aos-anchor-placement="top-bottom">
          <div
            className="researchBox p-2"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <p>
              <i className="fa-solid fa-check checkLogo" /> Highly trained in
              administrative tasks
            </p>
            <p>
              <i className="fa-solid fa-check checkLogo" /> Professionally
              managed and supported
            </p>
            <p>
              <i className="fa-solid fa-check checkLogo" /> Proficient in
              google, and most productivity suites
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Reason;
