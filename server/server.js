import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose'; //either is valid
import dotenv from 'dotenv'


const app = express();
dotenv.config(); //what is this shit
app.use(express.static('assets'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors);

app.get('/', (req, res) => {
    res.send

})

const port = process.env.PORT || 5000;
//console.log('connection url: ', process.env.CONNECTION_URL)
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=> console.log('connected to db'))
  .catch(err => console.log(err))

app.listen(port, ()=> console.log(`Listening on ${port}`))

mongoose.set('useFindAndModify', false)
