const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const scoresRouter = require('./routes/scoresRouter');
//const {User} = require('./models/userModel')

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  score: Number
})

const User = mongoose.model('User', userSchema);

const app = express();
dotenv.config();
app.use(express.json());
// app.use(express.urlencoded({extended:true}));
//app.use('/api/scores', scoresRouter);

app.get('/scores/highscores', (req,res) => {
  User.find({}, function(err,users){
    res.send(users)
  })
})

app.post('/scores/addscore', async (req,res) => {
  const entry = new User(req.body);
  
  try {
    await entry.save();
    res.send(entry);
  } catch (error) {
    res.status(500).send(error);
  }
});


app.get('/', 
  (req, res) => {
    res.status(200).send('Work already!!!!!')
  }
)


const port = process.env.PORT || 5000;
//console.log('connection url: ', process.env.CONNECTION_URL)
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=> console.log('connected to db'))
  .catch(err => console.log(err))

app.listen(port, ()=> console.log(`Listening on ${port}`))

mongoose.set('useFindAndModify', false)
