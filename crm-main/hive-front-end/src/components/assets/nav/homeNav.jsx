import React from "react";
import Logo from "../Hive Logo Black H.svg";
import { Link } from "react-router-dom";

function HomeNav() {
  return (
    <div>
      <>
        {/* Navbar */}
        <nav className="navbarHome navbar  navbar-expand-lg navbar-light bg-light">
          {/* Container wrapper */}
          <div className="container">
            {/* Navbar brand */}

            <a className="navbar-brand me-2 " href="/">
              <img src={Logo} height={36} alt loading="lazy" />
            </a>

            {/* Toggle button */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarButtonsExample"
              aria-controls="navbarButtonsExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
            {/* Collapsible wrapper */}

            <div
              className="collapse navbar-collapse "
              id="navbarButtonsExample"
            >
              {/* Left links */}
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 homeNavLinks">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    What is Hive?
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    How does it work?
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    How does it help my business?
                  </a>
                </li>
              </ul>
              {/* Left links */}
              <div className="d-flex ">
                <Link to="/login">
                  <button
                    type="button"
                    className="btn btn-link px-5 me-2 buttonTopNav1"
                  >
                    Login
                  </button>
                </Link>
                <button type="button" className="btn  buttonTopNav2">
                  Support
                </button>
              </div>
            </div>
            {/* Collapsible wrapper */}
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
      </>
    </div>
  );
}

export default HomeNav;
