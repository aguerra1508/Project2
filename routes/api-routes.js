const db = require("../models");
const passport = require("passport");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.post("/questions", isAuthenticated, function(req, res) {
    res.render("questions");
  });
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
        console.log("api sign up working")
        res.redirect(307, "/questions");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  //GET route for getting all of the users
  /*app.get("/api/users/", function(req,res) {
    db.Users.findAll({}).then(function(dbUsers) {
      console.log(dbUsers);
      res.json(dbUsers);
    });
  });*/

  app.get("/logout", function(req,res) {
    req.logout();
    res.redirect("/login");
  });
  

  app.get("/questions", function(req,res) {
    db.Questions.findOne({
      where: {
        questions: req.params.question
      }
    }).then(function(dbQuestions) {
      console.log ("questions working");
      res.json(dbQuestions);
    });
  });

  /*//Post route for saving new question
  app.post("/api/posts/questions", function(req,res){
    console.log(req.body);
    db.Questions.create({
      question: req.body.question,
    }).then(function(dbQuestions){
      res.json(dbQuestions);
    });
  });
  
  //Post route for saving new answer
  app.post("/api/posts/answers", function(req,res){
    console.log(req.body);
    db.Answers.create({
      answer: req.body.answer
    }).then(function(dbAnswers){
      console.log(dbAnswers);
      res.json(dbAnswers);
    });
  });
    
/*app.delete("/api/posts/:id", function(req,res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      console.log(dbUser);
      res.json(dbUser);
    });
  });*/
};