const db = require("../models");
const passport = require("passport");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.post("/questions", isAuthenticated, function(req, res) {
    db.Questions.findAll({})
    .then(response => res.render("questions", {
      questions: response
    }))
    .catch(err => console.error(err))
    //res.render("questions");
  });
  
  //app.post("/questions", isAuthenticated, function(req, res) {
  //   res.render("questions");
  // });
  // If user is able to log in successfully
  app.post("/login", passport.authenticate("local"), function(req, res) {
    res.redirect(307, "/questions");
  });
  // If user creates an account
  app.post("/signup", passport.authenticate("local"), function(req, res) {
    db.Users.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        console.log("api sign up working");
        res.redirect(307, "/questions");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
    });
  app.get("/logout", function(req,res) {
    req.logout();
    res.redirect("/login");
  });
};