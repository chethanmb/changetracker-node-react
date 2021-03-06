const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let changeSchema = new Schema({
  change_id: {
    type: String,
    required: true
  },
  changetask_id: {
    type: String,
    required: true
  },
  change_title: {
    type: String,
    required: true
  },
  account: {
    type: String,
    required: true
  }
}, {
    collection: 'change_collection'
  })

module.exports = mongoose.model('ChangeDB', changeSchema)