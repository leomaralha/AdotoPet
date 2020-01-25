const mongoose = require ('mongoose')

const UserScheema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  age: Number,
  state: String,
  city: String,

})

module.exports = mongoose.model('users', UserScheema)