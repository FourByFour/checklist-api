var express       = require('express'),     // Express Framework
    mongoose      = require('mongoose'),    // MongoDB Mapping
    bodyParser    = require('body-parser'), // Request body parser
    dotenv        = require('dotenv'),      // Hiding environment variables
    config        = require('./config'),    // Config options
    errorhandler  = require('errorhandler'),// Stack trace printing on error
    app           = express();              // Creating the express app

// Conditional module loading if in development environment
if ('development' == app.get('env')) {
  app.use(errorhandler());
  dotenv.load();
};

// Creating MongoDB connection via Mongoose
mongoose.connect(config.database().mongo_uri);

// Setting bodyParser as express' parser
app.use(bodyParser.json());

// Setting application port number
app.set("port", config.server.port);

// Require HTTP route endpoints
var routes = require('./routes')(app);

// Set the application to listen on a specified port
app.listen(app.get("port"), function() {
  console.log("Checklist API is listening on port " + app.get("port") +
    " in " + app.settings.env + " mode");
});
