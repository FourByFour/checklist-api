var Task = require('../../models/task');

module.exports = (function() {
  // DELETE /tasks/:id
  return function destroy(req, res, next) {
    var id = req.params.id;
    Task.remove({
      _id: id
    }, function(err, task) {
      if (err) res.json(err);
      console.log('\nDestroying task with id: ' + id + '\n');
      res.json({status: "Destroyed task - " + id});
    });
  }
})()