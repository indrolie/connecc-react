import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <span className="navbar-brand">Connecc</span>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse signup" id="navbarCollapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active" id="nav-home">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item" id="nav-about">
          <a className="nav-link" href="about.html">
            About
          </a>
        </li>
        <li className="nav-item" id="nav-signup">
          <Link to="/signup" className="nav-link">
            Sign up
          </Link>
        </li>
        <li className="nav-item" id="nav-login">
          <Link to="/signin" className="nav-link">
            Sign in
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
