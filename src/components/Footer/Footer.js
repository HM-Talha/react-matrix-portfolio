import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    
      <div className="footerParent">
        <div className="container footerContent">
          <section className="footerBOx">
            <div className="footeIconBox">
              <p>
                Leading the Digital Revolution Where innovation meets
                excellence.
              </p>
              <ul>
                <li>
                  <i className="fa-brands fa-twitter" />
                </li>
                <li>
                  <i className="fa-brands fa-github" />
                </li>
                <li>
                  <i className="fa-brands fa-facebook" />
                </li>
                <li>
                  <i className="fa-brands fa-linkedin" />
                </li>
              </ul>
            </div>
            <div className="footerBox2 mt-4">
              <h5>Explore</h5>
              <ul>
                <li>About</li>
                <li>Meet Our Team</li>
                <li>Case Storeis</li>
                <li>Latest News</li>
                <li>Contact</li>
              </ul>
            </div>
          </section>
          <section className="footerBOx2">
            <div className="footerContactBox mt-3">
              <h5>Contact</h5>
              <p>
                Tariq Road Near dolmen Mall xyz....addres
                <span className="d-block contact">+92344-1891650</span>
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
                <input type="text" name="" id="" placeholder="Email Address" />
                <i className="fa-solid fa-paper-plane" />
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
