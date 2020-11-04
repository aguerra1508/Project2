// Dependencies
const db = require("../models");
const passport = require("passport");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

// eslint-disable-next-line prefer-const
let increment = 1;

module.exports = function (app) {
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.post("/questions", isAuthenticated, function (req, res) {
    console.log("api questions working");
    // Pulling questions from DB
    db.Questions.findAll({
      // Pull only the specified question in at at time
      where: {
        id: increment }
      // Rendering the questions page
    }).then(response => res.render("questions", {
      // Post question to page
      questions: response
      // If error, catch error
    })).catch(err => console.error(err));
  });
  // If user has an account in the DB, log them in and send them to the questions page
  app.post("/login", passport.authenticate("local"), function (req, res) {
    console.log("api login working");
    res.redirect(307, "/questions");
  });
  // If user creates an account
  app.post("/signup", function (req, res) {
    // Adds data to DB
    db.Users.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    // Once account created, log them in
      .then(function () {
        console.log("api sign up working");
        res.redirect(307, "/login");
      })
      // If error, catch error
      .catch(function (err) {
        res.status(401).json(err);
      });
  });
};