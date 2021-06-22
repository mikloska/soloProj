const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const scoresRouter = require('./routes/scoresRouter');
const app = express();
//const models = require('./models/userModel')
const User = require('./models/userModel')
const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({ extended: true }));





dotenv.config();
app.use(express.json());
// app.use(express.urlencoded({extended:true}));
//app.use('/api/scores', scoresRouter);

app.get('/scores/highscores', (req,res) => {
  User.find({}, function(err,users){
    res.send(users)
  })
})



app.post('/scores/addscore', (req,res) => {
  const {name,score} = req.body;
  User.create({name,score}, (err, user)=> {
    return res.status(200).json(user);
  }) 

});


app.get('/', 
  (req, res) => {
    res.status(200).send('Work already!!!!!')
  }
)

app.delete('/scores/deleteuser',
  (req,res) => {
    const {name : name} = req.body;
    User.findOneAndDelete({name}, (err,deletedUser) => {
      return res.status(200).json(deletedUser);
    })
  }
)


const port = process.env.PORT || 5000;
//console.log('connection url: ', process.env.CONNECTION_URL)
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=> console.log('connected to db'))
  .catch(err => console.log(err))

app.listen(port, ()=> console.log(`Listening on ${port}`))

mongoose.set('useFindAndModify', false)
