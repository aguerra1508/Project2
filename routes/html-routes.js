// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Direct user to login page first
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
    console.log("initial login page");
  });
  // Direct user to sign up page
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
    console.log("clicked sign up");
  });
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
    console.log("clicked login");
  });
  app.get("/questions", isAuthenticated, function(req, res) {
    res.render("questions");
    console.log("getting questions");
  });

};
