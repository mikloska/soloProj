import React, { Component } from 'react';
import { render } from 'react-dom';

const NoteCircle = (props) => {
  //const {hang} = props;
  const{id, text} = props;
    
      return(
        <div id = {id}  className = "circles" onClick = {() => {props.handleOnClick(id)}} >
          {text}
        </div> 

      )

  }

  export default NoteCircle;