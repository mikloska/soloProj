// import cors from 'cors';
const express = require('express')
// import express from 'express';
const mongoose = require('mongoose')
// import mongoose from 'mongoose'; //either is valid
const dotenv = require('dotenv')
// const path = require('path')
// const scoresRouter = require('./routes/scoresRouter');


const app = express();
dotenv.config(); //allows you to use .env files
// app.use(express.static('assets'))
app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// app.use('api/scores', scoresRouter);

const port = process.env.PORT || 5000;
//console.log('connection url: ', process.env.CONNECTION_URL)
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=> console.log('connected to db'))
  .catch(err => console.log(err))

app.listen(port, ()=> console.log(`Listening on ${port}`))

mongoose.set('useFindAndModify', false)
