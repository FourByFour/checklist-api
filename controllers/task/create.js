var Task = require('../../models/task');

module.exports = (function() {

  // POST /tasks
  return function create(req, res, next) {
    var newTask = {
      title       : req.body.title,
      description : req.body.description,
      status      : req.body.status,
      updatedAt   : Date.now(),
      createdAt   : Date.now()
    };

    Task.create(newTask, function(err) {
      if (err) return handleError(err);
    });
    res.end();
  }
})();