import React, { Component, useState, useEffect } from 'react';
import {render} from 'react-dom';
import NoteCircle from "./NoteCircle.jsx";


//import '../.././sounds'



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
  //const [circleClass, setCircleClass] = useState('circles')
  const [score, scoreUpdate] = useState(0) //() => '0');
  const [remaining, remainingUpdate] = useState(5) //() => '0');
  const [note, noteUpdate] = useState(noteObj[noteKeys[Math.floor(Math.random()*noteKeys.length)]].note)  //noteArray[Math.floor(Math.random()*noteArray.length)]

  function handleOnClick(payload) {
    
    
    if(noteObj[payload].note === note){
      let noteToUpdate = noteObj[noteKeys[Math.floor(Math.random()*noteKeys.length)]]
      while(noteToUpdate.clicked === true){
        noteToUpdate = noteObj[noteKeys[Math.floor(Math.random()*noteKeys.length)]]
      }
      noteUpdate(noteToUpdate.note)
      noteObjUpdate(oldBoard => ({
        ...oldBoard,
        [payload]: {...oldBoard[payload], clicked: true}, 
      }))

      console.log(noteObj)
      
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
      let newGame = confirm('Don\'t quit your day job! Play again?');
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
 
          clicked = {noteObj[noteKeys[i]].clicked}
          key = {i}
          handleOnClick = {handleOnClick}
          id = {noteKeys[i]}
          className = {`major ${isRandom? deg[func()] : deg[i]}`}
          text = {noteObj[noteKeys[i]].note}
        >

        </NoteCircle>)
  }


// Notes start
  
const state1 = {
  majorsObj : [
    {FMajor:{clicked:false, note:'F', chord: 'fac'},CMajor:{clicked:false, note:'C', chord: 'ceg'}},
    {GMajor:{clicked:false,note:'G',chord:'ghd'},DMajor:{clicked:false,note:'D',chord:'df#a'}},
    {AMajor:{clicked:false,note:'A',chord:'ac#e'},EMajor:{clicked:false,note:'E',chord:'eg#h'}},
    {HMajor:{clicked:false,note:'H',chord:'hf#d#'},FSharpMajor:{clicked:false,note:'F#',chord:'f#bc#'}},
    {CSharpMajor:{clicked:false,note:'C#',chord:'c#fg#'},AFlatMajor:{clicked:false,note:'A♭',chord:'abceb'}},
    {EFlatMajor:{clicked:false,note:'E♭',chord:'ebgb'},BMajor:{clicked:false,note:'B',chord:'bdf'}}
  ],
  miniorsObj : [
    {fMinor:{clicked:false, note:'f',chord:'fg#c'},cMinor:{clicked:false, note:'c',chord:'cebg'}},
    {gMinor:{clicked:false, note:'g',chord:'gbd'},dMinor:{clicked:false, note:'d',chord:'dfa'}},
    {aMinor:{clicked:false, note:'a',chord:'ace'},eMinor:{clicked:false, note:'e',chord:'egd'}},
    {hMinor:{clicked:false, note:'h',chord:'hdf#'},fSharpMinor:{clicked:false, note:'f#',chord:'f#ac#'}},
    {cSharpMinor:{clicked:false, note:'c#',chord:'c#eg#'},aFlatMinor:{clicked:false, note:'a♭',chord:'abheb'}},
    {eFlatMinor:{clicked:false, note:'e♭',chord:'ebf#b'},bMinor:{clicked:false, note:'b',chord:'bc#f'}}
  ]
}

//randomizing array posistions
const func = (i, randoNum) =>i+randoNum > 12? Math.abs(i - randoNum) : i + randoNum;

const deg = [
  'deg0',
  'deg30',
  // fill with deg css classes
]

  for(let i = 0; i< 12; i++){
    circle.push(
        <NoteCircle 
 
          clicked = {majorsObj[i].clicked}
          key = {majors[i].chord} // defenately don't use i
          handleOnClick = {handleOnClick}
          id = {majors[i].chord} // only for you sound thing
          className = {`major ${deg[func]}`}
          text = {majors[i].note}
        >

        </NoteCircle>)
        circle.push(
          <NoteCircle 
   
            clicked = {miniorsObj[noteKeys[i]].clicked}
            key = {miniors[i].chord}
            handleOnClick = {handleOnClick}
            id = {miniors[i].chord}
            className = {`minior ${deg[func]}`}
            text = {minors[i].note}
          >
  
          </NoteCircle>)
  }

  // update sound with new id values
 
  // notes end

  return(
    <div>
      <div id='game-container'>
            {circle}

        <div id = 'note-prompt'  ><div id = 'note-prompt-div'>{note}</div></div>

      </div>
      
      <div id = 'score-and-remaining'>
        <div id = 'score-remaining-text'>Score: {score}</div>
        <div id = 'score-remaining-text'>Remaining Tries: {remaining}</div>
      </div>
      <div id = 'top-scores'>
        <div id = 'top-scores-text'>Top Scores: </div>
      </div>
      <button>Randomize</button>
    </div>
  );



}
export default Board;