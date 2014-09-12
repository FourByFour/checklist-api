// Using Mongoose Task model schema
var Task = require('../../models/task');

// Exporting a closure via the module pattern.
module.exports = (function() {
  // GET /users
  return function all(req, res, next) {
    Task.find(function(err, tasks) {
      if (err) res.json(err);
      console.log("Show all tasks");
      res.json(tasks);
    });
  };
})();