const mongoose = require('mongoose')
const config = require('../config')
const db = mongoose.connection

mongoose.connect(config.db.url)

db.on("error", err => {
  console.error("MongoDB connect failed !", err)
})

db.on("open", err => {
  console.log(`MongoDB connecting with ${config.db.url}`)
})