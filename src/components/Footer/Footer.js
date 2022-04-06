import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const goTopAbout = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };
  const goTopFaq = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };
  const goTopTeam = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };
  const goTopConatct = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };
  return (
    <div className="footerParent">
      <div className="container footerContent">
        <section className="footerBOx">
          <div className="footeIconBox">
            <p>
              Leading the Digital Revolution Where innovation meets excellence.
            </p>
            <ul>
              <li>
                <a href="https://wa.me/+923363649948" target={"_blank"}>
                  <i className="fa-brands fa-whatsapp" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/matrixtech16/"
                  target={"_blank"}
                >
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a href="https://github.com/matrix-tech01" target={"_blank"}>
                  <i className="fa-brands fa-github" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/matrixtech78/"
                  target={"_blank"}
                >
                  <i className="fa-brands fa-facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/matrix-tech1/?viewAsMember=true"
                  target={"_blank"}
                >
                  <i className="fa-brands fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footerBox2 mt-4">
            <h5>Explore</h5>
            <ul>
              <Link to={"/about"} onClick={goTopAbout}>
                <li>About</li>
              </Link>
              <Link to={"/team"} onClick={goTopTeam}>
                <li>Meet Our Team</li>
              </Link>
              <Link to={"/faq"} onClick={goTopFaq}>
                <li>FAQS</li>
              </Link>
              <Link to={"/contact"} onClick={goTopConatct}>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </section>
        <section className="footerBOx2">
          <div className="footerContactBox mt-3">
            <h5>Contact</h5>
            <p>
              Tariq Road Near dolmen Mall...
              <span className="d-block contact">+92334-1891650</span>
              <span className="d-block email">Matrix.tech78@gmail.com</span>
            </p>
          </div>
          <div
            className="footerFormBox"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <h5>Signup For Newslatter</h5>
            <p>What’s happening? Be the first to know.</p>

            <div className="inpBox">
              <input type="email" name="" id="" placeholder="Email Address" />
              <a href="mailto:matrix.tech78@gmail.com">
                <i className="fa-solid fa-paper-plane" />
              </a>
            </div>
            <p>I agree to all terms and policies</p>
          </div>
        </section>
      </div>
      <div className="copyRightFooter">
        <p>&copy; Copyright 2022 by Matrix Tech</p>
      </div>
    </div>
  );
};

export default Footer;
