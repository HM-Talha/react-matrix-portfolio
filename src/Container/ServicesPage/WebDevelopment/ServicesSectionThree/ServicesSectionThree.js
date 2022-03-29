import React from "react";
import "./ServicesSectionThree.css";

const ServicesSectionThree = () => {
  return (
    <div className="container sectionThreeParent">
      <section className="sercChildOne">
        <div className="planningBox">
          <h5 className="mb-3">Planning and work strategy</h5>
          <p>
            Quickly and cost-efficiently migrate your legacy applications’
            resources as-is from on-premises infrastructure to your cloud
            platform of choice .
          </p>
          <h5>Modernization Assessment</h5>
          <p>
            We determine the most appropriate strategy for modernizing your
            applications and propose a detailed roadmap .
          </p>
        </div>
        <div className="researchBox">
          <p>
            <i className="fa-solid fa-check checkLogo" /> Research beyond the business
            plan not work here
          </p>
          <p>
            <i className="fa-solid fa-check checkLogo" /> Marketing options and rates
            lipsum simply
          </p>
          <p>
            <i className="fa-solid fa-check checkLogo" /> The ability to turnaround
            consulting work on it
          </p>
          <p>
            <i className="fa-solid fa-check checkLogo" /> Customer engagement matters not
            at all
          </p>
        </div>
        <div className="paraBox">
          <p>
            By continually adapting to technological advances and modern trends,
            Asin Labs always remains at the forefront of application
            development. Our experienced and certified development teams use
            leading-edge methodologies to design, develop, implement, and
            continually enhance innovative business solutions for all major
            platforms and devices. Our cloud, desktop, and mobile applications
            offer the best balance of performance, usability, cost-efficiency,
            resiliency, and maintainability to help you increase business ROI.
          </p>
        </div>
        <div className="dropDownParent">
          <section data-aos="zoom-in-left" data-aos-duration="1500">
            <h5>Precise Delivery</h5>
            <p>
              Our teams never compromise on delivering the complete set of
              products and services we promised, when we promised. .
            </p>
          </section>
          <section data-aos="zoom-in-left" data-aos-duration="1500">
            <h5>Skilled Personnel</h5>
           
          </section>
          <section data-aos="zoom-in-left" data-aos-duration="1500">
            <h5>Proven Track Record</h5>
           
          </section>
        </div>
      </section>
      <section className="sercChildTwo">
        <div className="helpCard" data-aos="zoom-in" data-aos-duration="1500">
          <h4>Need Help</h4>
          <p>
            Prefer speaking with a human to filling out a form? call corporate
            office and we will connect you with a team member who can help.
          </p>
          <i className="fa-solid fa-phone " />
        </div>
      </section>
    </div>
  );
};

export default ServicesSectionThree;
