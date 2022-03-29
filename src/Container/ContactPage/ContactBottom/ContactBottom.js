import React, { useEffect, useState } from "react";
import Logo from "../../../assets/contactbottom.jpg";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import "./ContactBottom.css";

const Bottom = () => {
  const [OdometerValue, SetOdometerValue] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      SetOdometerValue(100);
    }, 2000);
  }, []);

  return (
    <section className="get-in-touch">
      <div className="container">
        <div className=" contactMiddleParent">
          <div className="imgSection">
            <div
              className="get-in-touch_img wow fadeINLeft animated "
              data-wow-duration="150ms"
            >
              <img src={Logo} alt="" />
              <div className="get-int-touch__img-shapes">
                <div className="get-in-touch__img-shape-1"></div>
                <div className="get-in-touch__img-shape-2"></div>
              </div>
            </div>
          </div>
          <div
            className="ml-5 contactWithUsSection "
            data-aos="zoom-in"
            data-aos-duration="2500"
          >
            <div className="get-in-touch__right ">
              <div className="section-title text-left">
                <h4 className=" text-center font-weight-bold text-primary">
                  Contact with us
                </h4>
                <h2 className="section-title__title text-center">
                  Get in touch with the agency
                </h2>
              </div>
              <p className="get-in-touch__location-text text-center">
                An ecosystem of individuals and startups working together to
                create a world that is honest and transparent.
              </p>
              <h3 className="get-in-touch__locations-count odometerCounter">
                <Odometer
                  value={OdometerValue}
                  format="(,ddd)"
                  theme="default"
                />
              </h3>
              <h4 className="get in-touch__locations-count-text text-center text-primary font-weight-bold">
                Projects has been completed
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div
            className="footerFormBox"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <i className="text-dark font-weight-bold pb-0 fas fa-map-marker-alt ">
              {" "}
              Pakistan
            </i>
            <h6 className="text-dark font-weight-bold pb-0 m-0  mx-2 ">
              Tariq Road Near dolmen Mall{" "}
            </h6>
            <a href="" className="nav-link navNum pb-0">
              <span className="email">Matrix.tech78@gmail.com</span>
            </a>
            <a href="" className="nav-link navNum">
              <i className="text-dark fa-solid  fa-phone mx-2"> 0900-78601</i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Bottom;
