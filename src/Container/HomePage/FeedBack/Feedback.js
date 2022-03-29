import React from "react";
import "./Feedback.css";
import Avatar1 from "../../../assets/Avatar-01.jpg";
import Avatar2 from "../../../assets/Avatar-02.jpg";
import Avatar3 from "../../../assets/Avatar-03.jpg";

const Feedback = () => {
  return (
    <div className="mt-5 mb-5">
      <div className="container feedbackBox">
        <section className="feedBackText">
          <p>Customer feedback</p>
          <h1>What they are talking about Matrix Tech?</h1>
        </section>
        <section className="feedback">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="avatarBox mx-auto">
                  <img
                    src={Avatar1}
                    data-aos="flip-up"
                    data-aos-duration="1000"
                    width="100%"
                    alt=""
                  />
                </div>
                <div>
                  <p data-aos="zoom-in" data-aos-duration="1500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugiat laudantium ullam ad animi voluptatem quisquam! Veniam
                    qui, repellendus voluptatibus, doloribus aspernatur facilis
                    earum velit quibusdam, incidunt totam odit. In, illo?
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="avatarBox mx-auto">
                  <img
                    src={Avatar2}
                    data-aos="flip-up"
                    data-aos-duration="1000"
                    width="100%"
                    alt=""
                  />
                </div>
                <div>
                  <p data-aos="zoom-in" data-aos-duration="1500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugiat laudantium ullam ad animi voluptatem quisquam! Veniam
                    qui, repellendus voluptatibus, doloribus aspernatur facilis
                    earum velit quibusdam, incidunt totam odit. In, illo?
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="avatarBox mx-auto">
                  <img
                    src={Avatar3}
                    data-aos="flip-up"
                    data-aos-duration="1000"
                    width="100%"
                    alt=""
                  />
                </div>
                <div>
                  <p data-aos="zoom-in" data-aos-duration="1500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugiat laudantium ullam ad animi voluptatem quisquam! Veniam
                    qui, repellendus voluptatibus, doloribus aspernatur facilis
                    earum velit quibusdam, incidunt totam odit. In, illo?
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-target="#carouselExampleControls"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-target="#carouselExampleControls"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Feedback;
