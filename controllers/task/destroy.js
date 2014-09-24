// Using Mongoose Task model schema
var Task = require('../../models/task');

// Exporting via the module pattern.
module.exports = function(req, res, next) {
  var id = req.params.id
  Task.remove({
    _id: id
  }, function(err, task) {
    if (err) res.json(err)
    console.log('\nDestroying task with id: ' + id + '\n')
    res.json({status: "Destroyed task: " + id})
  })
}