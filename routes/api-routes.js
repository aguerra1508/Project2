// Dependencies
const db = require("../models");
const passport = require("passport");
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
module.exports = function(app) {
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/questions/quiz/:id", isAuthenticated, function(req, res) {
    db.Questions.findAll({
      where: {
        id: req.params.id
      },
    })
      .then(response => res.render("questions", {
        questions: response
      }))
      .catch(err => console.error(err));
  });
  app.post("/questions/quiz/:id", isAuthenticated, function(req, res) {
    console.log("api questions working");
    let questId = parseInt(req.body.questId);
    const ans = (req.body.yes_no === "yes");
    db.UserAnswers.create({
      answer: ans,
      UserId: req.user.id,
      QuestionId: questId
    }).then(() => res.redirect(`${++questId}`));
  });
  app.post("/login", passport.authenticate("local"), function(req, res) {
    res.redirect("/questions/quiz/1");
    console.log("api login working");
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


  // eslint-disable-next-line no-unused-vars
  app.post("/answers", function(req,res) {
    console.log("got it up to here");
    db.UserAnswers.create({
      yes: req.body.yes
    });
      
  });
};