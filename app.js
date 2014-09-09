var express     = require('express'),
    app         = express(),
    config      = require('./config'),
    bodyParser  = require('body-parser'),
    routes      = require('./routes')(app);

app.use(bodyParser.json());
app.set("port", config.server.port);

app.listen(app.get("port"), function() {
  console.log("Checklist API is listening on port " + app.get("port") +
    " in " + app.settings.env + " mode");
});