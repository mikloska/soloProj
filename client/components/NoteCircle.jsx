import React, { Component, useState } from 'react';
import useSound from 'use-sound';
import A from '../../sounds/A.mp3'






const NoteCircle = (props) => {
  const [play] = useSound(A);
  const [isHovering, setIsHovering] = useState(false); 
  console.log(A) 
  play(A) 
  //const {hang} = props;
  const{id, text, clicked} = props;


  //initial = {{opacity:0}} animate ={{opacity:1}} transition={{duration:6}}
  // whileHover = {{scale: 1.05}} whileTap={{scale:0.90}}
      return(
        < div id = {id} className = {clicked ? 'circles-clicked' : 'circles'} onClick = {() => {props.handleOnClick(id)}} 
        onMouseEnter={() => {
          setIsHovering(true);
          play();
        }}
        onMouseLeave={() => {
          setIsHovering(false);
          stop();
        isHovering={isHovering}
        }} >
         
    
         {text}
        </div>


      )

  }

  export default NoteCircle;