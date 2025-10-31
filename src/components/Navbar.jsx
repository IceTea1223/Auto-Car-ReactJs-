import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/Navbar.css";

function Navbar() {
  const location = useLocation(); // Track current URL

  return (
    <nav
      className="navbar navbar-expand-lg navbar-black bg-black py-2 shadow-sm"
      style={{ zIndex: 1030, position: "sticky", top: "0px" }}
    >
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand font-logo text-white" to="/">
          <span className="brand-highlight">Auto</span>Car
        </Link>

        {/* Mobile toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links + profile */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center font-text">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/cars"
                className={`nav-link ${location.pathname === "/cars" ? "active" : ""}`}
              >
                Cars
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
              >
                Contact
              </Link>
            </li>

            {/* User Profile Dropdown */}
            <li className="nav-item dropdown ms-lg-4 mt-2 mt-lg-0">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#!"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-user me-1"></i> Account
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/settings">
                    Settings
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item text-danger" to="/logout">
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
