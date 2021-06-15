import React, { Component } from 'react';
import { render } from 'react-dom';
import {motion} from 'framer-motion'

const NoteCircle = (props) => {
  const fadeLeft ={
    hidden: {opacity:0,x:-100},
    visible: {opacity:1,x:0}
  }
  //const {hang} = props;
  const{id, text} = props;
  //initial = {{opacity:0}} animate ={{opacity:1}} transition={{duration:6}}
  // whileHover = {{scale: 1.05}} whileTap={{scale:0.90}}
      return(
        <motion.div  initial = {{opacity:0}} animate ={{opacity:1}} transition={{duration:6}}//whileHover = {{scale: 2}} whileTap={{scale:0.90}} //variants = {fadeLeft} initial='hidden' transition={{duration:1}}  //initial = {{opacity:.2}} animate ={{opacity:1}} transition={{duration:6}}
        
        id = {id}  className = "circles" onClick = {() => {props.handleOnClick(id)}} >
          <div id = 'circle-text'>{text}</div>
        </motion.div> 

      )

  }

  export default NoteCircle;