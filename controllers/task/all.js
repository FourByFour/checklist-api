var Task = require('../../models/task');

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