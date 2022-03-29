import "./Navbar.css";
import "animate.css";
import Logo from "../../assets/DFgnWp.png";
import { Link } from "react-router-dom";

const Navbar = () => {
return (
    <>
      <header className="navScrolbar">
        <nav className="navbar  navbar-expand-lg navbar-light my-nav p-0 mr-3">
          <a className="navbar-brand navLogo" >
            <img src={Logo} width="100%" alt="" />
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
                <a className="nav-link">
                  <i className="fa-brands fa-github nav-logos" />
                </a>
              </li>
              <li className="nav-item mx-auto">
                <a className="nav-link">
                  <i className="fa-brands fa-facebook nav-logos" />
                </a>
              </li>
              <li className="nav-item mx-auto">
                <a className="nav-link">
                  <i className="fa-brands fa-linkedin nav-logos"></i>
                </a>
              </li>
            </ul>

            <ul className="navbar-nav mx-auto">
              <li className="nav-item active mx-auto">
                <a className="nav-link navLinks text-hite" href="#">
                  <Link to={"/"}>Home</Link>
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
                    <Link to={"/webdesign"} className=" Links"> Web designing</Link>
                  </a>
                  <a href="#" className="dropdown-item dropDownLinks">
                    <Link to={"/webdeveloper"}>Web Development</Link>
                  </a>
                  <a href="#" className="dropdown-item dropDownLinks">
                    <Link to={"/graphicdesign"}>Graphic Designing</Link>
                  </a>
                </div>
              </li>
              <li className="nav-item mx-auto">
                <a href="#" className="nav-link navLinks">
                  <Link to={"/contact"}>Contact</Link>
                </a>
              </li>
              <li className="nav-item dropdown mx-auto">
                <a href="#"
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
                    <Link to={"/about"}>About</Link>
                  </a>
                  <a className="dropdown-item dropDownLinks" href="#">
                    <Link to={"/team"}>Team</Link>
                  </a>
                  <a className="dropdown-item dropDownLinks" href="#">
                    <Link to={"/faq"}>FAQ</Link>
                  </a>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto mr-3">
              <li className="nav-item  mx-auto">
                <a  className="nav-link navNum">
                  <i className="fa-solid fa-phone mx-2" />
                  <span className=""> 0304-5801623</span>
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
