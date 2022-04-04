import "./Navbar.css";
import "animate.css";
import Logo from "../../assets/DFgnWp.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const goTop = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };
  const goTopdDesign = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };
  const goTopDesign = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };
  const goTopGraphic = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };
  const goTopAbout = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };
  const goTopTeam = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };
  const goTopFaq = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };
  const gotTopContact = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <header className="navScrolbar">
        <nav className="navbar  navbar-expand-lg navbar-light my-nav p-0 mr-3">
          <a className="navbar-brand navLogo">
            <Link to={"/"} onClick={goTop}>
              <img src={Logo} width="100%" alt="" />
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa-solid fa-bars text-black" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item active mx-auto">
                <a
                  href="https://wa.me/+9233636499481"
                  target="_blank"
                  className="nav-link"
                >
                  <i className="fa-brands fa-whatsapp nav-logos" />
                </a>
              </li>
              <li className="nav-item active mx-auto">
                <a
                  href="https://github.com/matrix-tech01"
                  target="_blank"
                  className="nav-link"
                >
                  <i className="fa-brands fa-github nav-logos" />
                </a>
              </li>
              <li className="nav-item mx-auto">
                <a
                  href="https://www.facebook.com/Matrix-Tech-114696287795036"
                  target="_blank"
                  className="nav-link"
                >
                  <i className="fa-brands fa-facebook nav-logos" />
                </a>
              </li>
              <li className="nav-item mx-auto">
                <a
                  href="https://www.linkedin.com/company/matrix-tech1/?viewAsMember=true"
                  target="_blank"
                  className="nav-link"
                >
                  <i className="fa-brands fa-linkedin nav-logos"></i>
                </a>
              </li>
            </ul>

            <ul className="navbar-nav mx-auto">
              <li className="nav-item active mx-auto">
                <a className="nav-link navLinks">
                  <Link to={"/"} onClick={goTop}>
                    Home
                  </Link>
                </a>
              </li>
              <li className="nav-item dropdown mx-auto">
                <a
                  className="nav-link dropdown-toggle navLinks"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a href="#" className="dropdown-item dropDownLinks">
                    <Link
                      to={"/webdesign"}
                      onClick={goTopdDesign}
                      className=" Links"
                    >
                      {" "}
                      Web designing
                    </Link>
                  </a>
                  <a href="#" className="dropdown-item dropDownLinks">
                    <Link to={"/webdeveloper"} onClick={goTopDesign}>
                      Web Development
                    </Link>
                  </a>
                  <a href="#" className="dropdown-item dropDownLinks">
                    <Link to={"/graphicdesign"} onClick={goTopGraphic}>
                      Graphic Designing
                    </Link>
                  </a>
                </div>
              </li>
              <li className="nav-item mx-auto">
                <a href="#" className="nav-link navLinks">
                  <Link to={"/contact"} onClick={gotTopContact}>
                    Contact
                  </Link>
                </a>
              </li>
              <li className="nav-item dropdown mx-auto">
                <a
                  href="#"
                  className="nav-link dropdown-toggle navLinks"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a href="#" className="dropdown-item dropDownLinks">
                    <Link to={"/about"} onClick={goTopAbout}>
                      About
                    </Link>
                  </a>
                  <a className="dropdown-item dropDownLinks" href="#">
                    <Link to={"/team"} onClick={goTopTeam}>
                      Team
                    </Link>
                  </a>
                  <a className="dropdown-item dropDownLinks" href="#">
                    <Link to={"/faq"} onClick={goTopFaq}>
                      FAQ
                    </Link>
                  </a>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto mr-3">
              <li className="nav-item  mx-auto">
                <a className="nav-link navNum">
                  <i className="fa-solid fa-phone mx-2" />
                  <span className=""> +92344-1891650</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
