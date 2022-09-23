const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: true,
    minlength: 1,
    maxlength: 10
  },
  password: {
    type: 'string',
    required: true,
    minlength: 4,
    maxlength: 20
  },
  __v: {
    type: Number,
    select: false
  }
})

const User = mongoose.model('User', userSchema)

module.exports = {
  User
}