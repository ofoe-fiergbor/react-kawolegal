import React from "react";
import logo from "../images/kawo-legal-logo.png";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-default navbar-custom">
        <div className="container-fluid">
          <div className="navbar-header ">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand logo" href="home.html">
              <img src={logo} alt="kawo_legal_logo" />
            </a>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right btns">
              <li>
                <a href="home.html">Home</a>
              </li>
              <li>
                <a href="startups.html">Startups</a>
              </li>
              <li>
                <a href="register.html">Register</a>
              </li>
              <li>
                <a href="login.html">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
