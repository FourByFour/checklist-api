// Using Mongoose Task model schema
var Task = require('../../models/task');

// Exporting a closure via the module pattern.
module.exports = (function() {
  // GET /tasks/:id
  return function show(req, res, next) {
    var id = req.params.id;

    // Query MongoDB tasks by id
    Task.findById(id, function(err, task) {
      if (err) res.json({error: "No task found with id: " + id });
      if (task) {
        console.log("\nRetrieving Task: " + task.title + "\n");
        res.json(task);
      } else {
        res.json({error: "No user found with id: " + id });
      };
    });
  };
})();