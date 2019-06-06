import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Container from './Container';
import Jumbotron from './Jumbotron/Jumbotron';
import Footer from './Footer/Footer';
import images from '../images';

class App extends Component {
  state = {
    score: 0,
    highScore: 0,

    // stores the class value to assign to navMessage based on a good or bad click
    navMsgColor: '',

    // contains intro, success, and failure message
    navMessage: 'Click an image to begin!',

    // contains an array of image urls
    allCharacters: this.shuffleArray(),

    // will track  each clicked element.
    wasClicked: [],
  };

  // binds the current this context to checkClicked to have access to the current state
  clickEvent = this.checkClicked.bind(this);

  // used to shuffle the array of images when the DOM loads, and when an image is clicked
  shuffleArray() {
    // creates a copy of the current characters array to modify it by value, and not by reference
    const newArr = images.slice();

    // will store the shuffled array
    const shuffleArr = [];

    // each loop through an index gets spliced from newArr, reducing its length
    while (newArr.length > 0) {
      shuffleArr.push(newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]);
    }

    return shuffleArr;
  }

  checkClicked(clickedElem) {
    // creates a copy of the wasClicked array to modify it by value, and not by reference. wasClicked stores all previous clicked images
    const prevState = this.state.wasClicked.slice();

    // shuffles the images
    const shuffled = this.shuffleArray();

    // tracks score
    let score = this.state.score;
    let highScore = this.state.highScore;

    // if the clicked item is not in wasClicked, then it hasn't been clicked and the score is increased
    if (!this.state.wasClicked.includes(clickedElem)) {
      // if score and highScore are the same, then there is a new highScore value
      if (score === highScore) {
        score++;
        highScore++;

        // if they are not equal, then only increase the score value
      } else {
        score++;
      }

      // adds the clicked item to wasClicked to track that it has been clicked
      prevState.push(clickedElem);
    }

    // resets the current score
    if (this.state.wasClicked.includes(clickedElem)) {
      let score = 0;
      return this.setState({
        score: score,
        highScore: highScore,
        navMsgColor: 'incorrect',
        navMessage: 'Incorrect guess!',
        allCharacters: shuffled,
        wasClicked: [],
      });
    }

    // if this runs, then the same element has not been clicked twice and the score is increased
    this.setState({
      score: score,
      highScore: highScore,
      navMsgColor: 'correct',
      navMessage: 'You Guessed Correctly!',
      allCharacters: shuffled,
      wasClicked: prevState,
    });

    // removes the green correct indicator on a successful click after .5s to re-render the class on each success
    return setTimeout(() => this.setState({ navMsgColor: '' }), 500);
  }

  // renders score to the navbar.
  render() {
    const state = this.state;
    return (
      <div>
        <Navbar
          score={state.score}
          highScore={state.highScore}
          navMessage={state.navMessage}
          navMsgColor={state.navMsgCoxwlor}
        />
         <Jumbotron/>
        <Container
          characters={state.allCharacters}
          clickEvent={this.clickEvent}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
