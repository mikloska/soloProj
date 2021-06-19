import React, { Component } from 'react';
import Board from "./Board.jsx";
//import Modal from "./Modal.jsx"
import logo from '../images/logo.png'
import StartModal from "./StartModal.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      startModal: false,
      name: "",
      modalInputName: "",
      showStart: true,

      
    }

  }
  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    console.log(value)
    this.setState({
      [name]: value
    });
  }


  handleSubmit(e) {
    this.setState({ name: this.state.modalInputName });
    this.setState({showStart: false})

  }


  render() {
    
   return (
     
      <div id = 'main-container' >
        <div id = 'header' >
        <div><img src = '../images/logo.png' id ='logo' /> <h1 id = 'header-text'>folkFifths</h1></div>
  
        </div>

      {this.state.showStart === true ? (
        <StartModal showStart={this.state.modal} handleClose={e => this.modalClose(e)}>
          
          <div className="form-group">
            <label><h2>Please enter your name:</h2></label>
            <input
              type="text"
              value={this.state.modalInputName}
              name="modalInputName"
              onChange={e => this.handleChange(e)}
              className="form-control"
            />
            <button onClick={e => this.handleSubmit(e)} type="button" className = 'modal-buttons'>
              Submit
            </button>
          </div>

        </StartModal>
       ):(null) }

      {/* {this.state.showEnd === true ? (
            <div id = 'start-modal' className={showHideClassName}>
            <div className="modal-container">
              <div className = 'modal-header-footer'/>
              <div className = 'modal-body'>
                <h4>Would you like to play again?</h4>
              </div>
              <a href="javascript:;" className="modal-close" onClick={handleClose}>
                
              </a>
              <div className = 'modal-header-footer' id = 'start-modal-footer'></div>
            </div>
          </div>

       ):(null) } */}
                   
        <Board name = {this.state.name}/> 
  
     
        <div>
  
        </div>  
                   
        
      </div>
      
      
    );
  }
}

export default App;