import React, { Component, useState, useEffect } from 'react';



const NoteCircle = (props) => {

  

  useEffect(() => {
    audioTune.load();
  })

  //const [isHovering, setIsHovering] = useState(false); 
  
  
  
  //const {hang} = props;
  const{id, text, clicked} = props;
  const audioTune = new Audio(`../../sounds/${id}.m4a`);




  //initial = {{opacity:0}} animate ={{opacity:1}} transition={{duration:6}}
  // whileHover = {{scale: 1.05}} whileTap={{scale:0.90}}
      return(
        < div id = {id} className = {clicked ? 'circles-clicked' : 'circles'} onMouseEnter = {()=> audioTune.play()} 
        
        onClick = {() => { props.handleOnClick(id)}}
         >

         
    
         {text}
        </div>


      )

  }

  export default NoteCircle;

          // onMouseEnter={() => {
        //   setIsHovering(true);
        //   console.log(A) 
        //   play();
        // }}
        // onMouseLeave={() => {
        //   setIsHovering(false);
        //   stop();
        // isHovering={isHovering}
        // }} 