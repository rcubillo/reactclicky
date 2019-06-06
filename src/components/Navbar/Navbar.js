import React from 'react';
import './styleNav.css';

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light" >
      <a className="navbar-brand" href="index.js">
        Clicky Game
      </a>

      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <h3>  Click an image to begin! </h3>
      </div>
    </nav>
  );

export default Navbar;
