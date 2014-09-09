var express       = require('express'),
    mongoose      = require('mongoose'),
    bodyParser    = require('body-parser'),
    dotenv        = require('dotenv'),
    config        = require('./config'),
    errorhandler  = require('errorhandler'),
    app           = express(),
    routes        = require('./routes')(app);

if ('development' == app.get('env')) {
  app.use(errorhandler());
  dotenv.load();
};

mongoose.connect(config.database().mongo_uri);

app.use(bodyParser.json());
app.set("port", config.server.port);

app.listen(app.get("port"), function() {
  console.log("Checklist API is listening on port " + app.get("port") +
    " in " + app.settings.env + " mode");
});