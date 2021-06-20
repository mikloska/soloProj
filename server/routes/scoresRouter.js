const express = require('express');
const scoresRouter = express.Router();
const userController = require('../controllers/userController');

scoresRouter.get('/api/scores/highscores',
  
  userController.getUsers,  
  (req, res) => {
    return res.status(200).json(res.locals.topFive)
  });

scoresRouter.post('/addscore',
  userController.addScore, 
    (req, res) =>{
      return res.status(200).json({})
    } 
)

module.exports = scoresRouter;