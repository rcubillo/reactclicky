import React from 'react';


const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
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

        <h3> Click an image to begin! </h3>
         Score: {props.score} <span className="pipe">|</span> High Score: {props.highScore}
        <p id="topScore">Top Score: 0</p>
      </div>
    </nav>
  );

export default Navbar;
