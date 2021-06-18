import React, { Component } from 'react';
import Board from "./Board.jsx";
//import Modal from "./Modal.jsx"


class App extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      name: "",
      modalInputName: ""
      
    }

  }
  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }


  handleSubmit(e) {
    this.setState({ name: this.state.modalInputName });
    this.modalClose();
  }

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({
      modalInputName: "",
      modal: false
    });
  }


  render() {
    
   return (
     
      <div id = 'main-container' >
        <div id = 'header' ><h1 id = 'header-text'>folkFifths</h1></div>
        {/* <img src = './images/palatkaiak.jpg' usemap="#game-board" id = "fifths-pic" className = 'palatkaiak' /> */}
        
                   
        <Board/> 
  
     
        <div>
  
        </div>  
                   
        
      </div>
      
      
    );
  }
}

export default App;