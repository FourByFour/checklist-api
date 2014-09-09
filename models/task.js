var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var taskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  status: {
    type: Boolean
  },
  updated_at: {
    type: Number
  },
  created_at: {
    type: Number
  }
}); 

module.exports = mongoose.model('Task', taskSchema);