import React from "react";
import "./ProjectSection.css";
import About from "../../../assets/about1.jpg";
import Logo from "../../../assets/DFgnWp.png";

function AboutSection() {
  return (
    <div className="mainParent mb-5">
      <section className="aboutParent">
        <div className="cont1 p-4 mt-5">
          <section>
            <p className="m-0 p-0 paraTextAbout"> Our Vision</p>
            <h1 className="my-3">
              {" "}
              We are growing and would always like to remain on the growing
              streak.
            </h1>
          </section>
          <section className="QuesionParent my-3">
            <p className="p-3 m-0 faqQuestion">
              What is our Vision? <i className="fa-solid fa-angle-down" />
            </p>
            <p className="faqAns m-0 p-3">
              Our Vision is to achieve 100% customer satisfaction by delivering
              quality products and services at an affordable cost.
            </p>
          </section>
          <section className="QuesionParent my-3">
            <p className="p-3 m-0 faqQuestion">
              What is our Vision? <i className="fa-solid fa-angle-down" />
            </p>
          </section>
          <section className="QuesionParent my-3">
            <p className="p-3 m-0 faqQuestion">
              What is our Vision? <i className="fa-solid fa-angle-down" />
            </p>
          </section>
        </div>
        <div className="cont2">
          <section>
            <img src={About} alt="" width="100%" height="690px" />
          </section>
          <section className="cont2Child">
            <img src={Logo} data-aos="zoom-in-up" width="120px" alt="" />
            <p className="mt-3">
              Matrix Tech provides a one-stop automated solution for your trade
              and industry. Depending on the size and field of your
              organization, we have different products and services to meet your
              requirements.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
