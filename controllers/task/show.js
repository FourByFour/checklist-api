var Task = require('../../models/task');

module.exports = (function() {
  // GET /tasks/:id
  return function show(req, res, next) {
    var id = req.params.id;
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