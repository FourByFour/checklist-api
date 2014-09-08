var controller = require('../controllers'),
    task       = controller.task;

module.exports = function(app){

  app.get('/',function(req, res, next) {
    res.json({"welcome" : "welcome to the checklist API"})
  });

  app.get('/tasks',task.all);
  app.post('/tasks',task.create);
  app.get('/tasks/:id',task.show);
  app.put('/tasks/:id',task.update);
  app.delete('/tasks/:id',task.destroy);
};