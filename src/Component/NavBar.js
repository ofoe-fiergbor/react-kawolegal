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
            <Link to='/'>
            <a className="navbar-brand logo" href="home.html">
              <img src={logo} alt="kawo_legal_logo" />
            </a>
            </Link>
          </div>
          <div
            className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className='ul'>
              <Link to='/login' className="nav-btns">
                <li className='nav-li'>Login</li>
              </Link>
              <Link to='/register' className="nav-btns">
                <li className='nav-li'>Register</li>
              </Link>
              <Link to='/startups' className="nav-btns">
                <li className='nav-li'>Startups</li>
              </Link>
              <Link to='/' className="nav-btns">
                <li className='nav-li'>Home</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
