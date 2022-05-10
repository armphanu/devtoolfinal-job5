const mongoose = require('mongoose')
const Schema = mongoose.Schema

const majorSchema = new Schema({
  course: String,
  plan: String,
  time: String,
  year:String,
  round:String,
  program:String,
  faculty:String,
  date: String
  })

const UserModel = mongoose.model('major', majorSchema, 'major')

module.exports = UserModel


