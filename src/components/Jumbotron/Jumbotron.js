import React from 'react';
import './jumbotron.css';

const Jumbotron = props => (
    <div className="jumbotron">
      <h1>Clicky Game!</h1>
      <p>
        Click on an image to earn points, but don't click on any more than once!
      </p>
              Score: {props.score} <span className="pipe">|</span> High Score: {props.highScore}
    </div>
  );


export default Jumbotron;
