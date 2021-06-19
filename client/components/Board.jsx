import React, { Component, useState, useEffect } from 'react';
import {render} from 'react-dom';
import NoteCircle from "./NoteCircle.jsx";
import axios from 'axios';

const Board =(props)=>{

  const{name} = props;

  const [noteObj, noteObjUpdate] = useState({
    FMajor:{clicked:false, note:'F', chord: 'fac'},CMajor:{clicked:false, note:'C', chord: 'ceg'},
    GMajor:{clicked:false,note:'G',chord:'ghd'},DMajor:{clicked:false,note:'D',chord:'df#a'},
    AMajor:{clicked:false,note:'A',chord:'ac#e'},EMajor:{clicked:false,note:'E',chord:'eg#h'},
    HMajor:{clicked:false,note:'H',chord:'hf#d#'},FSharpMajor:{clicked:false,note:'F#',chord:'f#bc#'},
    CSharpMajor:{clicked:false,note:'C#',chord:'c#fg#'},AFlatMajor:{clicked:false,note:'A♭',chord:'abceb'},
    EFlatMajor:{clicked:false,note:'E♭',chord:'ebgb'},BMajor:{clicked:false,note:'B',chord:'bdf'},
    fMinor:{clicked:false, note:'f',chord:'fg#c'},cMinor:{clicked:false, note:'c',chord:'cebg'},
    gMinor:{clicked:false, note:'g',chord:'gbd'},dMinor:{clicked:false, note:'d',chord:'dfa'},
    aMinor:{clicked:false, note:'a',chord:'ace'},eMinor:{clicked:false, note:'e',chord:'egh'},
    hMinor:{clicked:false, note:'h',chord:'hdf#'},fSharpMinor:{clicked:false, note:'f#',chord:'f#ac#'},
    cSharpMinor:{clicked:false, note:'c#',chord:'c#eg#'},aFlatMinor:{clicked:false, note:'a♭',chord:'abheb'},
    eFlatMinor:{clicked:false, note:'e♭',chord:'ebf#b'},bMinor:{clicked:false, note:'b',chord:'bc#f'}
  });

  const noteArray = [
    'F','C','G','D','A','E','H','F#','C#','A♭','E♭','B',
    'f','c','g','d','a','e','h','f#','c#','a♭','e♭','b'
  ]
  const [topFive, setTopFive] = useState([]);
  const [showEnd, showEndUpdate] = useState(false);
  const [showChord, showChordUpdate] = useState(false);
  const noteKeys = Object.keys(noteObj)
  //const [circleClass, setCircleClass] = useState('circles')
  const [score, scoreUpdate] = useState(0) //() => '0');
  const [remaining, remainingUpdate] = useState(5) //() => '0');
  const [note, noteUpdate] = useState(noteObj[noteKeys[Math.floor(Math.random()*noteKeys.length)]].note)  //noteArray[Math.floor(Math.random()*noteArray.length)]
  const bad = new Audio('https://solosounds.s3.us-east-2.amazonaws.com/Bad.m4a');
  //const [chordSubmitted, setChordSubmitted] = useState(false);
  const [chordModalInput, setChordModal]=useState('');
  const [chordName, chordNameUpdate] = useState('');
  const [currChord, setCurrChord] = useState('ljkl');



  function handleOnClick(payload) {
    setCurrChord(noteObj[payload].chord);
    console.log(currChord)
    if(noteObj[payload].note !== note){
      bad.play();
      remainingUpdate(remaining-1);
      return;
    } 
    if(noteObj[payload].note === note){
      scoreUpdate(score+1);
      let noteToUpdate = noteObj[noteKeys[Math.floor(Math.random()*noteKeys.length)]]
      console.log(noteObj)
      while(noteToUpdate.clicked === true){
        noteToUpdate = noteObj[noteKeys[Math.floor(Math.random()*noteKeys.length)]]
      }
      noteUpdate(noteToUpdate.note)
      noteObjUpdate(oldBoard => ({
        ...oldBoard,
        [payload]: {...oldBoard[payload], clicked: true}, 
      }))

      

      showChordUpdate(true);

      //console.log('chord name before conditional:', chordName)
      //const chordPrompt = prompt("Great job! Now please enter the chord! (enter 'b' for flats and '#' for sharps)")


      
    }
    
    

  }

  // useEffect(() => {
  //   console.log('chordName: ',chordName, 'currChord',currChord, )
  //   if(chordName === currChord){
  //     scoreUpdate(score+3);
  //     return;
  //   }

  // },[chordSubmitted])


  function handleChordChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    //console.log(value);
    chordNameUpdate(value);
    //console.log('chordName: ',chordName)

  }

  async function handleChordSubmit(e) {
    await setChordModal(chordName);
    //setChordSubmitted(true)
    //console.log('handleChordSubmit: ',chordName)
    if(chordName === currChord){
      scoreUpdate(score+3);
    }else {
      remainingUpdate(remaining-1);
    } 
     
    showChordUpdate(false);


  }



  
  useEffect(() => {
    axios.get('/highScores')
      .then((res)=> {
        const pulledScores = res.data;
        pulledScores.sort((a,b) => (a.score > b.score)? -1 : 1);
        setTopFive(pulledScores.slice(0,4));

      })
      .catch(err => console.log(`Error: ${err}`))
  },[])
  

  useEffect(()=> {
    if(remaining < 1){
      // console.log(name)
      // console.log(score)

      axios({
        method: 'post',
        url: '/addScore',
        data: {
          name: name,
          score: score
        }
      });



    //   axios.post('/addScore',
    //  { name: name, score: score })
    //   .then(res => {
    //     if (res.status === 200){
    //       setSubmitted(true)
    //     }
    //   })

      showEndUpdate(true)


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
          text = {noteObj[noteKeys[i]].note}
        >

        </NoteCircle>)
  }



  return(

    <div>

        {showEnd === true ? (
            <div id = 'modal' >
            <div className="modal-container">
              <div className = 'modal-header-footer'/>
              <div className = 'modal-body'>
                <h4>Would you like to play again?</h4>
                <a href="javascript:;" className="modal-close" >
                <button className = 'modal-buttons' onClick = {()=>window.location.reload()}>Of course!</button>
              </a>
              </div>

              <div className = 'modal-header-footer' id = 'start-modal-footer'></div>
            </div>
          </div>

       ):(null) }

        {showChord === true ? (

        <div id = 'modal' >
        <div className="modal-container">
          <div className = 'modal-header-footer'/>
          <div className = 'modal-body'>
            <h4>Good job! Now enter the chord! Use b for flats and # for shaprs.</h4>
            <a href="javascript:;" className="modal-close" >
            <input
              type="text"
              //value={this.state.modalInputName}
              name="modalInputName"
              onChange={e => handleChordChange(e)}
              className="form-control"
            />
            <button  type="button" className = 'modal-buttons' onClick={handleChordSubmit}>  
            
              Submit
            </button>
          </a>
          </div>

          <div className = 'modal-header-footer' id = 'start-modal-footer'></div>
        </div>
        </div>



        ):(null) }


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
        <div>{topFive}</div>
      </div>
      {/* <button>Randomize</button> */}
    </div>
  );



}
export default Board;