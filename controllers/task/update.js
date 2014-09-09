var Task = require('../../models/task');

module.exports = (function() {

  // UPDATE /tasks/:id
  return function update(req, res, next) {

    Task.findById(req.params.id, function(err, task) {

      task.title       = req.body.title;
      task.description = req.body.description;
      task.status      = req.body.status;
      task.updatedAt   = Date.now();

      task.save(function(err){
        if (err) res.json(err);
      })
      res.end();
    });
  }
})()