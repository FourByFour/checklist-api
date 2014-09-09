module.exports = (function(){
  // POST /tasks
  return function create(req, res, next) {
    res.json({"tasks" : "Create new task"});
  }
})()