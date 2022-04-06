import React from "react";
import "./TeamCards.css";
import Team6 from "../../../../assets/team6.jpg";
import Team5 from "../../../../assets/team5.jpg";
import Team4 from "../../../../assets/team4.jpg";
import Team3 from "../../../../assets/team3.jpg";
import Team2 from "../../../../assets/team2.jpg";
import Team1 from "../../../../assets/team1.jpg";

const TeamCards = () => {
  return (
    <section className="my-5">
      <div className="container">
        <section className="teamParent">
          <div
            className="mx-3 my-2"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <section className="cardParent">
              <div className="teamCardBox">
                <img src={Team1} width="100%" height="370px" />
              </div>
              <section className="d-flex justify-content-center border iconBox">
                <i className="mx-2 py-2 fa-brands fa-facebook" />
                <i className="mx-2 py-2 fa-brands fa-instagram" />
                <i className="mx-2 py-2 fa-brands fa-github" />
                <i className="mx-2 py-2 fa-brands fa-whatsapp" />
              </section>
            </section>
            <section className="nameBox">
              <h5>
                Bob Marlay
                <br />
                <span>MERN STACK</span>
              </h5>
            </section>
          </div>
          <div
            className="mx-3 my-2"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <section className="cardParent">
              <div className="teamCardBox">
                <img src={Team2} width="100%" height="370px" />
              </div>
              <section className="d-flex justify-content-center border iconBox">
                <i className="mx-2 py-2 fa-brands fa-facebook" />
                <i className="mx-2 py-2 fa-brands fa-instagram" />
                <i className="mx-2 py-2 fa-brands fa-github" />
                <i className="mx-2 py-2 fa-brands fa-whatsapp" />
              </section>
            </section>
            <section className="nameBox">
              <h5>
                Robert Petricia
                <br />
                <span>Web Designer</span>
              </h5>
            </section>
          </div>
        </section>
        <section className="teamParent">
          <div
            className="mx-3 my-2"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <section className="cardParent">
              <div className="teamCardBox">
                <img src={Team3} width="100%" height="370px" />
              </div>
              <section className="d-flex justify-content-center border iconBox">
                <i className="mx-2 py-2 fa-brands fa-facebook" />
                <i className="mx-2 py-2 fa-brands fa-instagram" />
                <i className="mx-2 py-2 fa-brands fa-github" />
                <i className="mx-2 py-2 fa-brands fa-whatsapp" />
              </section>
            </section>
            <section className="nameBox">
              <h5>
                David Barbara
                <br />
                <span>IOS Developer</span>
              </h5>
            </section>
          </div>
          <div
            className="mx-3 my-2"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <section className="cardParent">
              <div className="teamCardBox">
                <img src={Team4} width="100%" height="370px" />
              </div>
              <section className="d-flex justify-content-center border iconBox">
                <i className="mx-2 py-2 fa-brands fa-facebook" />
                <i className="mx-2 py-2 fa-brands fa-instagram" />
                <i className="mx-2 py-2 fa-brands fa-github" />
                <i className="mx-2 py-2 fa-brands fa-whatsapp" />
              </section>
            </section>
            <section className="nameBox">
              <h5>
                Charles Keren
                <br />
                <span>Android App Developer</span>
              </h5>
            </section>
          </div>
        </section>
        <section className="teamParent">
          <div
            className="mx-3 my-2"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <section className="cardParent">
              <div className="teamCardBox">
                <img src={Team5} width="100%" height="370px" />
              </div>
              <section className="d-flex justify-content-center border iconBox">
                <i className="mx-2 py-2 fa-brands fa-facebook" />
                <i className="mx-2 py-2 fa-brands fa-instagram" />
                <i className="mx-2 py-2 fa-brands fa-github" />
                <i className="mx-2 py-2 fa-brands fa-whatsapp" />
              </section>
            </section>
            <section className="nameBox">
              <h5>
                Daniel Lisa
                <br />
                <span>Back-End Developer</span>
              </h5>
            </section>
          </div>
          <div
            className="mx-3 my-2"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <section className="cardParent">
              <div className="teamCardBox">
                <img src={Team6} width="100%" height="370px" />
              </div>
              <section className="d-flex justify-content-center border iconBox">
                <i className="mx-2 py-2 fa-brands fa-facebook" />
                <i className="mx-2 py-2 fa-brands fa-instagram" />
                <i className="mx-2 py-2 fa-brands fa-github" />
                <i className="mx-2 py-2 fa-brands fa-whatsapp" />
              </section>
            </section>
            <section className="nameBox">
              <h5>
                Donald Ashley
                <br />
                <span>Senior Full Stact Developer</span>
              </h5>
            </section>
          </div>
        </section>
      </div>
    </section>
  );
};

export default TeamCards;
