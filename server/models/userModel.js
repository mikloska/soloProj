const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
  name: {type: String, required: true},
  score: {type: Number, required: true}
})

module.exports = new mongoose.model('User', userSchema);
  