// Using Mongoose Task model schema
var Task = require('../../models/task')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
  // Query MongoDB tasks by id
  Task.findById(req.params.id, function(err, task) {

    task.title       = req.body.title
    task.description = req.body.description
    task.status      = req.body.status
    task.updatedAt   = Date.now()

    task.save(function(err){
      if (err) res.json(err)
    })
    res.end()
  })
}