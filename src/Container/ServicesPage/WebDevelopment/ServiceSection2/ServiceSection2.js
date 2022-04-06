import React from "react";
import Services from "../../../../assets/webdevpic.jpg";
import ServIcon from "../../../../assets/ServIcon.png";
import "./ServiceSection2.css";
const ServiceSection2 = () => {
  return (
    <div className="container servSecTwoParent">
      <div className="servChild1">
        <section className="servTopImg">
          <img src={Services} width="100%" data-aos="fade-up" alt="" />
        </section>
        <section className="webDesignContent">
          <img src={ServIcon} data-aos="fade-up" alt="" />
          <h5 data-aos="fade-up">Web Development</h5>
          <p data-aos="fade-up-right">
            Local and international clients across all major industries have
            digitized and enhanced their internal and customer-facing operations
            using web applications created by Asin Labs. We use a wide range of
            proprietary and open-source modern technologies and frameworks to
            produce powerful and user-friendly applications that users can
            access from any modern web browser. Asin Labs also provides native
            and cross-platform desktop application development services for all
            major operating systems with excellent performance and a rich user
            experience.
          </p>
        </section>
      </div>
      <div
        className="servChild2"
        data-aos="fade-up-left"
        data-aos-duration="1500"
      >
        <section>
          <h4>
            Catories <i className="fa-solid fa-angle-right" />
          </h4>
          <p>
            Web Design <i className="fa-solid fa-angle-right" />
          </p>
          <p className="firstPara">
            Web Development <i className="fa-solid fa-angle-right" />
          </p>
          <p>
            Graphic Designing <i className="fa-solid fa-angle-right" />
          </p>
        </section>
      </div>
    </div>
  );
};

export default ServiceSection2;
