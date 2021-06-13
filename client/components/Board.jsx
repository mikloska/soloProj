import React, { Component, useState, useEffect } from 'react';
import {render} from 'react-dom';

const Board =()=>{
  const [noteObj, noteObjUpdate] = useState({
    'FMAjor':{clicked:false, note:'F'},CMAjor:{clicked:false, note:'C'},GMAjor:{clicked:false,note:'G'},DMAjor:{clicked:false,note:'D'},AMAjor:{clicked:false,note:'A'},EMAjor:{clicked:false,note:'E'},HMAjor:{clicked:false,note:'H'},FMajorSharp:{clicked:false,note:'F#'},DMajorFlat:{clicked:false,note:'D♭'},EMajorFlat:{clicked:false,note:'E♭'},AMajorFlat:{clicked:false,note:'A♭'},B:{clicked:false,note:'B'},
    fMinor:{clicked:false, note:'f'},cMinor:{clicked:false, note:'c'},gMinor:{clicked:false, note:'g'},dMinor:{clicked:false, note:'d'},aMinor:{clicked:false, note:'a'},eMinor:{clicked:false, note:'e'},hMinor:{clicked:false, note:'h'},fSharpMinor:{clicked:false, note:'f#'},dFlatMinor:{clicked:false, note:'d♭'},eFlatMinor:{clicked:false, note:'e♭'},aFlatMinor:{clicked:false, note:'a♭'},bMinor:{clicked:false, note:'b'}
  });

  const noteArray = [
    'F','C','G','D','A','E','H','F#','D♭','E♭','A♭','B',
    'f','c','g','d','a','e','h','f#','d♭','e♭','a♭','b'
  ]
  const noteKeys = Object.keys(noteObj)
  
  const [score, scoreUpdate] = useState(0) //() => '0');
  const [note, noteUpdate] = useState(noteObj[noteKeys[Math.floor(Math.random()*noteKeys.length)]].note)  //noteArray[Math.floor(Math.random()*noteArray.length)]



  
  //onClick={() => scoreUpdate(score + 1) }

  const handleOnClick = () => {



    noteUpdate(noteObj[noteKeys[Math.floor(Math.random()*noteKeys.length)]].note); //noteArray[Math.floor(Math.random()*noteArray.length)]
    
    scoreUpdate(score+1);
    

  }
  return(
  <div>
    <div id = "F"   onClick = {handleOnClick} ></div> 
    <div>{note}</div>
    <div>{score}</div>
    <img src = './images/fifths.jpg' usemap="#game-board" id = "fifths-pic" />
      {/* <map name="game-board">
        <area shape="rect" id = "F" coords="1112,353,1310,548" onClick = {handleOnClick} href="computer.htm" alt="Sun"/>
      </map> */}

  </div>
  );



}
export default Board;