import React from 'react'
import { Link } from 'react-router-dom';

// CSS
import "../css/pagesNav.css"

// images
import Logo from "../Hive Logo White H.svg";

function PagesNav() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light pagesNav">
          {/* Container wrapper */}
          <div className="container-fluid">
            {/* Navbar brand */}
            <Link className="navbar-brand " to="/">
              <img
                src={Logo}
                height={36}
                alt
                loading="lazy"
                style={{ marginTop: "-1px" }}
              />
            </Link>
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
            <div className="collapse navbar-collapse" id="navbarButtonsExample">
              {/* Left links */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#"></a>
                </li>
              </ul>
              {/* Left links */}
              <div className="d-flex align-items-center">
                <ul className="navbar-nav">
                  {/* Avatar */}{" "}
                  <li className="nav-item dropdown profileDrop">
                    <a
                      className="nav-link dropdown-toggle d-flex align-items-center"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                        className="rounded-circle"
                        height={42}
                        alt
                        loading="lazy"
                      />
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          My profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Support
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            {/* Collapsible wrapper */}
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
      </div>
    );
}

export default PagesNav
