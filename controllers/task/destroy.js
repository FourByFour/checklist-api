module.exports = (function() {
  // DELETE /tasks/:id
  return function destroy(req, res, next) {
    res.json({ "tasks" : "Destroy a task by id" });
  }
})()