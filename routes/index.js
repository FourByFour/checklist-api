var controller = require('../controllers'),
    task       = controller.task;

module.exports = function(app){

  // GET /
  app.get('/',function(req, res, next) {
    res.json({"welcome" : "welcome to the checklist API"})
  });

  // GET /users
  app.get('/tasks', task.all);

  // POST /tasks
  app.post('/tasks', task.create);

  // GET /tasks/:id
  app.get('/tasks/:id', task.show);

  // UPDATE /tasks/:id
  app.put('/tasks/:id', task.update);

  // DELETE /tasks/:id
  app.delete('/tasks/:id', task.destroy);
};