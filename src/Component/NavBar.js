import React from "react";
import { Link } from 'react-router-dom'
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
              <Link to='/'>
                <li>Home</li>
              </Link>
              <Link to='/startups'>
                <li>Startups</li>
              </Link>
              <Link to='/register'>
                <li>Register</li>
              </Link>
              <Link to='/login'>
                <li>Login</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
