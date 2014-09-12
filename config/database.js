module.exports = function() {
  // Setting local NODE_ENV to production in heroku environment
  switch (process.env.NODE_ENV || "development") {
    case "production":
      return {
        // Setting MONGO_URI to the MongoLab Database
        // http://mongolab.com
        mongo_uri: process.env.MONGO_URI
      };
    case "development":
      return {
        // Use local system MongoDB
        // Typically someting along the lines of the following
        // mongodb://localhost/<database name>
        mongo_uri: process.env.LOCAL_MONGO_URI
      };
  }
};