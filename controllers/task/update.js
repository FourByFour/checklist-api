module.exports = (function() {
  // UPDATE /tasks/:id
  return function update(req, res, next) {
    res.json({ "tasks" : "Update task by id" });
  }
})()