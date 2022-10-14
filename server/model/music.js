const mongoose = require('./index');

const musicSchema = new mongoose.Schema({
  audioUrl: String,
  imgUrl: String,
  musicName: String
})

const Music = mongoose.model('music', musicSchema);

module.exports = { Music };