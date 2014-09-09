module.exports = (function() {
  // GET /users
  return function all(req, res, next) {
    res.json({"tasks" : "Show all tasks"});
  }
})();