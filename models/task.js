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
  updatedAt: {
    type: Number
  },
  createdAt: {
    type: Number
  }
}); 

module.exports = mongoose.model('Task', taskSchema);