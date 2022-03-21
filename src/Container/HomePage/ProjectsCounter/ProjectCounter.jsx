import React from "react";
import "./ProjectCounter.css";

function ProjectCounter() {
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
                <h1>100+</h1>
                <p className="paraClr">Projects Complete</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-3 text-center py-5 px-0">
              <div className="counterDiv1 countDiv2">
                <i className="fa-solid fa-user-tie my-3 d-block" />
                <h1>20+</h1>
                <p className="paraClr">Active Clients</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-3 text-center py-5 px-0 mx-auto">
              <div className="counterDiv1">
                <i className="fa-solid fa-mug-hot my-3 d-block" />
                <h1>10+</h1>
                <p className="paraClr">Cup of Coffee</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-3 text-center  py-5 px-0">
              <div className="">
                <i className="fa-solid fa-users my-3 d-block" />
                <h1>500+</h1>
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
