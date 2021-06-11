import React, { Component, useState, useEffect } from 'react';
import {render} from 'react-dom';

const Board =()=>{
  const games = {default : "fifths", fifths : "fifths"}
  const [game, gameUpdate] = useState( 'default' );
  const image = `./images/${games[game]}.jpg`

  function updateGame(payload){
    console.log(payload)
    //gameUpdate(payload)
  }

  return(
  <div>

    <img src = {image} id = "fifths-pic"></img>
  </div>
  );


//  <img src = './images/fifths.jpg' id = "fifths-pic"></img>
}
export default Board;