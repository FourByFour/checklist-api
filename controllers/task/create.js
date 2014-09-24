// Using Mongoose Task model schema
var Task = require('../../models/task')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
  var newTask = {
    title       : req.body.title,
    description : req.body.description,
    status      : false,
    updatedAt   : Date.now(),
    createdAt   : Date.now()
  }

  // Inserting a new task into MongoDB
  // via Mongoose create method.
  Task.create(newTask, function(err) {
    if (err) return handleError(err)
  })
  res.end()
}