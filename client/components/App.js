import React, { Component } from 'react';
import Board from "./Board.jsx";


class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }


  render() {
    
   return (
      <div id = 'main-container'>
        <div>
          <div id='game-container'>
          {/* <div id = "buttons"> */}
          {/* <button id = 'start'>Start Game</button> */}
            {/* <button id = 'fifths' >Circle of Fifths</button>
            <button id = 'flats-and-sharps'>Flats and Sharps</button>
            <button>Chords</button> */}
          {/* </div> */}
 
            <Board/> 
          </div>
        </div>
        <div>
          <textarea>
            Top Scores:
          </textarea>
        </div>               
      </div>
      
      
    );
  }
}

export default App;