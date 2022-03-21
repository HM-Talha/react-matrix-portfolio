import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="mt-5 pb-5">
      <section className="container my-5 servTextParent">
        <p className="mb-0 servPara mt-5">Our Services</p>
        <h1 className=" servHeading">What we're doing..</h1>
      </section>
      <section className="container servicesParent">
        <section className="serviceBoxes">
          <div className="servicesBox pt-5">
            <h3 className="my-3 mt-5">Web Development</h3>
            <p>
              Our website development company works with clients based all over
              Pakistan and worldwide. A website is the central tool for the
              visibility of a business on the Internet. An effective website
              will not only strengthen the attraction, but also the acquisition
              and retention of new customers. If you have the ambition to
              accelerate your growth and increase your income.
            </p>
          </div>

          <div className="topLogo">
            <i
              className="fa-solid fa-chess-king"
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
          </div>
        </section>

        <section className="serviceBoxes">
          <div className="servicesBox pt-5">
            <h3 className="my-3 mt-5">Mobile Apps</h3>
            <p>
              To improve your digital strategy and benefit from all the
              advantages of the mobile digital age, the mobile application
              allows you to open new distribution channels for your business. A
              dedicated application makes it possible to improve the visibility
              of brands, build customer loyalty, promote even improve your
              company's business processes.
            </p>
          </div>

          <div className="topLogo1">
            <i
              className="fa-solid fa-box-archive"
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
          </div>
        </section>

        <section className="serviceBoxes">
          <div className="servicesBox pt-5">
            <h3 className="my-3 mt-5">IOS Apps</h3>
            <p>
              A large community is using iphones in the world. We Design &
              Develop native iOS applications that dynamically adapt multiple
              screen sizes of iPhone & iPad. We will surely build your
              application which can compete at international level to get the
              ball rolling for your organization. The App Store is a platform
              provided by apple for distributing apps by developers to users.
            </p>
          </div>

          <div className="topLogo2">
            <i
              className="fa-solid fa-delete-left"
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Services;
