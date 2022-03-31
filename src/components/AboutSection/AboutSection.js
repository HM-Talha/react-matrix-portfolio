import React from "react";
import "./ProjectSection.css";
import About from "../../assets/about1.jpg";
import Logo from "../../assets/DFgnWp.png";

function AboutSection() {
  return (
    <div className="mainParent mb-5">
      <section className="aboutParent">
        <div className="cont1 p-4 mt-5">
          <div className="ourVisionBox">
            <h3>Our Vision</h3>
          </div>
          <div className="ourVisionBox mt-3 pb-3">
            <p>
              Our Vision is to achieve 100% customer satisfaction by delivering
              quality products and services at an affordable cost. Our forward
              vision is to strive to become an entity in technology based
              corporate solutions, capable of demanding unconditional response
              from the targeted niche. We also believe that for our scope of
              improvisation – sky is the limit and we are always ready to take
              our achievements to the next level. We are growing and would
              always like to remain on the growing streak. Matrix Tech provides
              a one-stop automated solution for your trade and industry.
              Depending on the size and field of your organization.
            </p>
          </div>
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
