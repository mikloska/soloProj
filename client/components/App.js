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
        <div id = 'header'><h1 id = 'header-text'>Circle of Fifths</h1></div>
        {/* <img src = './images/palatkaiak.jpg' usemap="#game-board" id = "fifths-pic" className = 'palatkaiak' /> */}
                   
        <Board/> 
  
     
        <div>
          {/* <h1>
            Top Scores:
          </h1> */}
        </div>               
      </div>
      
      
    );
  }
}

export default App;