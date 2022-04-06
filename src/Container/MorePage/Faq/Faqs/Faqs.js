import React from "react";
import "./faqs.css";

const Faqs = () => {
  return (
    <div className="AboutSection py-5">
      <section className="container py-5">
        <div className="d-flex justify-content-between faqsParent">
          <section
            className="FaqsBox my-3 mr-2"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div class="accordion accordion-flush" id="chapters">
              <div class="accordion-item myAcordianContent">
                <h2 class="accordion-header" id="heading-1">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#chapter-1"
                    aria-expanded="false"
                    aria-controls="chapter-1"
                  >
                    What is our Vision?
                  </button>
                </h2>
                <div
                  id="chapter-1"
                  class="accordion-collapse collapse"
                  aria-labelledby="heading-1"
                  data-bs-parent="#chapters"
                >
                  <div class="accordion-body">
                    Our Vision is to achieve 100% customer satisfaction by
                    delivering quality products and services at an affordable
                    cost.
                  </div>
                </div>
              </div>
              <div class="accordion-item myAcordianContent">
                <h2 class="accordion-header" id="heading-2">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#chapter-2"
                    aria-expanded="false"
                    aria-controls="chapter-2"
                  >
                    What is our mission?
                  </button>
                </h2>
                <div
                  id="chapter-2"
                  class="accordion-collapse collapse"
                  aria-labelledby="heading-2"
                  data-bs-parent="#chapters"
                >
                  <div class="accordion-body">
                    We curate purpose-driven digital solutions that solve
                    business problems. We strengthen organizations by guiding
                    them through important technology decisions. cost.
                  </div>
                </div>
              </div>
              <div class="accordion-item myAcordianContent">
                <h2 class="accordion-header" id="heading-3">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#chapter-3"
                    aria-expanded="false"
                    aria-controls="chapter-3"
                  >
                    WHY TERROSTAR?
                  </button>
                </h2>
                <div
                  id="chapter-3"
                  class="accordion-collapse collapse"
                  aria-labelledby="heading-3"
                  data-bs-parent="#chapters"
                >
                  <div class="accordion-body">
                    that look great, work flawlessly and help to grow your
                    business. Working with us means you get a team large enough
                    to execute your project on time, but small enough for daily
                    interaction.
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="FaqsBox my-3 mr-2"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item myAcordianContent">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Our Services
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Our DG Web line of services offers everything you need for
                    your website! It all begins with a Website Strategy,
                    Information Architecture, and User Experience/User Interface
                    Design. We then transition over to Front-End & Back-End Web
                    Development, Custom Plugin Creation, Security & Quality
                    Assurance, and Website Launch Services & Training. cost..
                  </div>
                </div>
              </div>
              <div class="accordion-item myAcordianContent">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    How We Plan..
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    During the planning phase of building a website, we gather
                    the necessary information that aims to ensure that
                    everything is aligned to work towards your company goals.
                    Then, we plan out the overall structure of the site. Similar
                    to a blueprint of a house, we organize your content and site
                    features to plan out your audience’s online experience.
                  </div>
                </div>
              </div>
              <div class="accordion-item myAcordianContent">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    ENVISION YOUR DREAM WEBSITE
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Our team of designers specializes in developing rich
                    front-end designs that attract attention and help users find
                    what they are looking for quickly.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
