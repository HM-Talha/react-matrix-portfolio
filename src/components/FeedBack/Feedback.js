import React from "react";
import "./Feedback.css";
import Avatar1 from "../../assets/client1.jpg";
import Avatar2 from "../../assets/client2.jpg";
import Avatar3 from "../../assets/Avatar-03.jpg";

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
                    height="100px"
                    alt=""
                  />
                </div>
                <div>
                  <p data-aos="zoom-in" data-aos-duration="1500">
                    Matrix Tech is the firm to work with if you want to keep up
                    to high standards. The professional workflows they stick to
                    result in exceptional quality. Important, they help you
                    think with the business logic of your application and they
                    don’t blindly follow what you are saying. Which is super
                    important. Overall, great skills, good communication, and am
                    happy with the results so far.
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
                    height="100px"
                    alt=""
                  />
                </div>
                <div>
                  <p data-aos="zoom-in" data-aos-duration="1500">
                    They are very sharp and have a high-quality team. I expect
                    quality from people, and they have the kind of team I can
                    work with. They were upfront about everything that needed to
                    be done. I appreciated that the cost of the project turned
                    out to be smaller than what we expected because they made
                    some very good suggestions. They are very pleasant to work
                    with.{" "}
                  </p>
                </div>
              </div>
              {/* <div className="carousel-item">
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
              </div> */}
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

          {/* <div className="avatarBox">
            <img src={Avatar1} width="100%" alt="" />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              laudantium ullam ad animi voluptatem quisquam! Veniam qui,
              repellendus voluptatibus, doloribus aspernatur facilis earum velit
              quibusdam, incidunt totam odit. In, illo?
            </p>
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default Feedback;
