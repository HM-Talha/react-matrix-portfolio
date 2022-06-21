import React from "react";
import "./Slider.css";

const Slider = ({ title, id, AppPic1, AppPic2, AppPic3, link }) => {
  console.log(link);
  return (
    <>
      <div className="pb-5">
        <div className="my-5 sliderBox">
          <h1 className="text-center my-3 textheading">{title}</h1>

          <div id={id} className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target={`#${id}`} data-slide-to={0} className="active" />
              <li data-target={`#${id}`} data-slide-to={1} />
              <li data-target={`#${id}`} data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <section className="d-flex justify-content-around imgBox">
                  <a target="_blank" href={link[0]}>
                    <img
                      src={AppPic1}
                      alt=""
                      height="250px"
                      className="imgSlider"
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                    />
                  </a>
                  <a target="_blank" href={link[1]}>
                    <img
                      src={AppPic2}
                      alt=""
                      height="250px"
                      className="imgSlider"
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                    />
                  </a>
                  <a target="_blank" href={link[2]}>
                    <img
                      src={AppPic3}
                      alt=""
                      height="250px"
                      className="imgSlider"
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                    />
                  </a>
                </section>
              </div>
              <div className="carousel-item">
                <section className="d-flex justify-content-around imgBox">
                  <a target="_blank" href={link[0]}>
                    <img
                      src={AppPic1}
                      alt=""
                      height="250px"
                      // width="50%"
                      className="imgSlider"
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                    />
                  </a>
                  <a target="_blank" href={link[1]}>
                  <img
                    src={AppPic2}
                    alt=""
                    height="250px"
                    className="imgSlider"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  />
                  </a>
                  <a target="_blank" href={link[2]}>
                  <img
                    src={AppPic3}
                    alt=""
                    height="250px"
                    className="imgSlider"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  />
                  </a>
                </section>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-target={`#${id}`}
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-target={`#${id}`}
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Slider;
