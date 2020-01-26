const mongoose = require ('mongoose')

const UserScheema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type:String,
    unique: true,
    require: true,
    lowercase: true
  },
  password: String,
  age: Number,
  state: String,
  city: String,

})

module.exports = mongoose.model('users', UserScheema)