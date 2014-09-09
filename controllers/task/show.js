module.exports = (function() {
  // GET /tasks/:id
  return function show(req, res, next) {
    res.json({ "tasks" : "Show task by id" });
  }
})()