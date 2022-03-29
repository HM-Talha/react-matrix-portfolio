import React from "react";
import "./ProjectSection.css";
import About from "../../assets/about1.jpg";
import Logo from "../../assets/DFgnWp.png";

function AboutSection() {
  return (
    <div className="mainParent mb-5">
      <section className="aboutParent">
        <div className="cont1 p-4 mt-5">
          <div
            className="accordion accordion-flush acordianBox"
            id="accordionFlushExample"
          >
            <div className="accordion-item acordianContent">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed faqQuestion"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  What is our Vision?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Our Vision is to achieve 100% customer satisfaction by
                  delivering quality products and services at an affordable
                  cost.
                </div>
              </div>
            </div>
            <div className="accordion-item acordianContent">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  What is our Vision?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Our Vision is to achieve 100% customer satisfaction by
                  delivering quality products and services at an affordable
                  cost.
                </div>
              </div>
            </div>
            <div className="accordion-item acordianContent">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  What is our Vision?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Our Vision is to achieve 100% customer satisfaction by
                  delivering quality products and services at an affordable
                  cost.
                </div>
              </div>
            </div>
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
