
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    title: String,
    price:Number,
    description: String,
    quantity: Number,
    comment:Array,
    pic: String,
    replycomment:Array,
    pic:String

  })
  

const PostModel = mongoose.model('product', productSchema, 'product')

module.exports = PostModel


