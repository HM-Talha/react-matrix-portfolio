import React, { useState, useEffect } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import "./ProjectCounter.css";

function ProjectCounter() {
  const [OdometerValue, SetOdometerValue] = useState(0);
  const [Project, setProject] = useState(0);
  const [Active, setActive] = useState(0);
  const [Happy, setHappy] = useState(0);

  const [scroll, setScroll] = useState(false);

  const setWidth = () => {
    if (window.scrollY >= 1000.0) {
      setScroll(true);
      setTimeout(() => {
        SetOdometerValue(100);
        setProject(80);
        setActive(500);
        setHappy(200);
      }, 2000);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", setWidth);
  return (
    <>
      <div>
        <div className="container mt-5 pt-5 mb-5">
          <div
            className="row myRow mx-auto"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="col-sm-12 col-md-5 col-lg-3 text-center py-5 px-0 mx-auto">
              <div className="counterDiv1">
                <i className="fa-solid fa-file-signature my-3  d-block" />
                <h1>
                  {" "}
                  <Odometer
                    value={Project}
                    format="(,ddd)"
                    theme="default"
                  />{" "}
                </h1>
                <p className="paraClr">Projects Complete</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-3 text-center py-5 px-0">
              <div className="counterDiv1 countDiv2">
                <i className="fa-solid fa-user-tie my-3 d-block" />
                <h1>
                  {" "}
                  <Odometer
                    value={Active}
                    format="(,ddd)"
                    theme="default"
                  />{" "}
                </h1>
                <p className="paraClr">Active Clients</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-3 text-center py-5 px-0 mx-auto">
              <div className="counterDiv1">
                <i className="fa-solid fa-mug-hot my-3 d-block" />
                <h1>
                  {" "}
                  <Odometer
                    value={OdometerValue}
                    format="(,ddd)"
                    theme="default"
                  />
                </h1>
                <p className="paraClr">Cup of Coffee</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-3 text-center  py-5 px-0">
              <div className="">
                <i className="fa-solid fa-users my-3 d-block" />
                <h1>
                  {" "}
                  <Odometer
                    value={Happy}
                    format="(,ddd)"
                    theme="default"
                  />{" "}
                </h1>
                <p className="paraClr">happy clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCounter;
