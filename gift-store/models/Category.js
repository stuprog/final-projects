const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let categorySchema = new Schema({ // mongo works with schema (entity) 
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true
  },
  title: {
    type: String,
    required: true
  },
  created: {
    type: Date, 
    default : Date.now()
  },
  updated: {
    type: Date, 
    default : Date.now()
  }
}, {
    collection: 'category'
  })

module.exports = mongoose.model('Category', categorySchema)