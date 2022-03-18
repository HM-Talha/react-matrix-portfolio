import React from "react";

import Img6 from "../../../assets/06.jpeg";
import Img7 from "../../../assets/07.jpeg";
import Img8 from "../../../assets/08.jpeg";
import Img9 from "../../../assets/09.jpeg";
import Img10 from "../../../assets/10.jpeg";
import Img11 from "../../../assets/11.jpeg";
import "./Slider.css";

const Slider = () => {
  return (
    <>
      <div className="my-5 sliderBox">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <section className="d-flex justify-content-around imgBox">
                <img
                  src={Img6}
                  alt=""
                  height="250px"
                  className="imgSlider"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                />
                <img
                  src={Img7}
                  alt=""
                  height="250px"
                  className="imgSlider"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                />
                <img
                  src={Img8}
                  alt=""
                  height="250px"
                  className="imgSlider"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                />
              </section>
            </div>
            <div className="carousel-item">
              <section className="d-flex justify-content-around imgBox">
                <img
                  src={Img9}
                  alt=""
                  height="250px"
                  className="imgSlider"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                />
                <img
                  src={Img10}
                  alt=""
                  height="250px"
                  className="imgSlider"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                />
                <img
                  src={Img11}
                  alt=""
                  height="250px"
                  className="imgSlider"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                />
              </section>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-target="#carouselExampleIndicators"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-target="#carouselExampleIndicators"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default Slider;
