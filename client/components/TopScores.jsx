import React, { Component, useState, useEffect } from 'react';



const TopScore = (props) => {
  const {topFive} = props;
  // const {name, score} = props;
  // for(let i = 0; i < 4; i++){
    
  // }
    // return(
    //   <div>
    //     <div className = 'score-remaining-text'>{name} : {score}</div>

    //   </div>
    // )

      return(
        <div>
        <div className = 'score-remaining-text'>{topFive[0].name} : {topFive[0].score}</div>
        <div className = 'score-remaining-text'>{topFive[1].name} : {topFive[1].score}</div>
        <div className = 'score-remaining-text'>{topFive[2].name} : {topFive[2].score}</div>
        <div className = 'score-remaining-text'>{topFive[3].name} : {topFive[3].score}</div>
        <div className = 'score-remaining-text'>{topFive[4].name} : {topFive[4].score}</div>
        </div>
      )

  }

  export default TopScore;