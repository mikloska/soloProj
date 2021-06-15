import React, { Component, useState, useEffect } from 'react';
import {render} from 'react-dom';
import NoteCircle from "./NoteCircle.jsx";
//import '../.././sounds'
import soundfile from '../../sounds/A.m4a'; 
import {motion} from 'framer-motion'

const Board =()=>{
  const [noteObj, noteObjUpdate] = useState({
    FMajor:{clicked:false, note:'F', chord: 'fac'},CMajor:{clicked:false, note:'C', chord: 'ceg'},
    GMajor:{clicked:false,note:'G',chord:'ghd'},DMajor:{clicked:false,note:'D',chord:'df#a'},
    AMajor:{clicked:false,note:'A',chord:'ac#e'},EMajor:{clicked:false,note:'E',chord:'eg#h'},
    HMajor:{clicked:false,note:'H',chord:'hf#d#'},FSharpMajor:{clicked:false,note:'F#',chord:'f#bc#'},
    CSharpMajor:{clicked:false,note:'C#',chord:'c#fg#'},AFlatMajor:{clicked:false,note:'A♭',chord:'abceb'},
    EFlatMajor:{clicked:false,note:'E♭',chord:'ebgb'},BMajor:{clicked:false,note:'B',chord:'bdf'},
    fMinor:{clicked:false, note:'f',chord:'fg#c'},cMinor:{clicked:false, note:'c',chord:'cebg'},
    gMinor:{clicked:false, note:'g',chord:'gbd'},dMinor:{clicked:false, note:'d',chord:'dfa'},
    aMinor:{clicked:false, note:'a',chord:'ace'},eMinor:{clicked:false, note:'e',chord:'egd'},
    hMinor:{clicked:false, note:'h',chord:'hdf#'},fSharpMinor:{clicked:false, note:'f#',chord:'f#ac#'},
    cSharpMinor:{clicked:false, note:'c#',chord:'c#eg#'},aFlatMinor:{clicked:false, note:'a♭',chord:'abheb'},
    eFlatMinor:{clicked:false, note:'e♭',chord:'ebf#b'},bMinor:{clicked:false, note:'b',chord:'bc#f'}
  });

  const noteArray = [
    'F','C','G','D','A','E','H','F#','C#','A♭','E♭','B',
    'f','c','g','d','a','e','h','f#','c#','a♭','e♭','b'
  ]
  const noteKeys = Object.keys(noteObj)
  
  const [score, scoreUpdate] = useState(0) //() => '0');
  const [remaining, remainingUpdate] = useState(5) //() => '0');
  const [note, noteUpdate] = useState(noteObj[noteKeys[Math.floor(Math.random()*noteKeys.length)]].note)  //noteArray[Math.floor(Math.random()*noteArray.length)]

  function handleOnClick(payload) {
    //console.log(payload);
    
    // noteObjUpdate(previous => ({
      
    //   ...previous,
    //   [payload] : {...previous.payload, clicked: true}
      
    // }))
    // if(noteObj.payload.clicked != true){

    //   noteUpdate(noteObj[noteKeys[Math.floor(Math.random()*noteKeys.length)]].note);
    // }
    // console.log(noteObj)
    //const sound = new Audio

    if(noteObj[payload].note === note){
      
      
      
      const chordPrompt = prompt("Great job! Now please enter the chord! (enter 'b' for flats and '#' for sharps)")
      if(chordPrompt === noteObj[payload].chord){
        scoreUpdate(score+3);
        return;
      }else{
        scoreUpdate(score+1);
        remainingUpdate(remaining-1);
        return;
      }

      
    }
    remainingUpdate(remaining-1);
    return;

  }
  useEffect(()=> {
    //console.log(currentPlayer)
    if(remaining < 1){
      console.log(noteObj)
      let newGame = confirm('Don/t quit your day job! Play again?');
      if (newGame === true){
        //reload the page / restart game
        window.location.reload();
        return; //needed to , bc it moved on to player X won after confirming
      }
    }
  })

  const circle = []
  for(let i = 0; i< noteKeys.length; i++){
    circle.push(
        <NoteCircle 
         
          key = {i}
          handleOnClick = {handleOnClick}
          id = {noteKeys[i]}
          text = {noteObj[noteKeys[i]].note}
        >

        </NoteCircle>)
  }



  return(
    <div>
      <div id='game-container'>
            {circle}
          {/* <NoteCircle handleOnClick = {handleOnClick} /> */}
          
          {/* <img src = './images/fifths.jpg' usemap="#game-board" id = "fifths-pic" /> */}
            {/* <map name="game-board">
              <area shape="rect" id = "F" coords="1112,353,1310,548" onClick = {handleOnClick} href="computer.htm" alt="Sun"/>
            </map> */}
        <div id = 'note-prompt'  ><div id = 'note-prompt-div'>{note}</div></div>

      </div>
      
      <div id = 'score-and-remaining'>
        <div className = 'score-remaining-text'>Score: {score}</div>
        <div className = 'score-remaining-text'>Remaining Tries: {remaining}</div>
      </div>
    </div>
  );



}
export default Board;