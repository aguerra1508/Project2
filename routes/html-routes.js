// Dependencies
//const path = require("path");

// Routes
module.exports = function (app) {

  // index route 
  app.get("/", function (req, res) {
    res.render("login");
  });
  // main route
  app.get("/quiz", function (req, res) {
    res.render("quiz");
  });
};
