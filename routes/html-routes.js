// Dependencies
//const path = require("path");

// Routes
module.exports = function (app) {

  // index route 
  app.get("/", function (req, res) {
    res.render("index");
  });
  // main route
  app.get("/quiz", function (req, res) {
    res.render("quiz");
  });
};
