const db = require("../models");
const passport = require("passport");

module.exports = function(app) {

  app.get("/", function(req,res){
    res.send("works");
    res.render("index");
  });
    
  //GET route for getting all of the users
  app.get("/api/users/", function(req,res) {
    db.Users.findAll({}).then(function(dbUsers) {
      console.log(dbUsers);
      res.json(dbUsers);
    });
  });

  //Post route for saving new user
  app.post("/signup", function(req,res){
    db.Users.create({
      name: req.body.name,
      email: req.body.email,
      //score: req.body.score,
      password: req.body.password
    }).then(function(dbUsers){
      //console.log(dbUsers);
      res.json(dbUsers);
    });
  });

  app.post("/login", passport.authenticate ("local" , {
    successRedirect: "/",
    failureRedirect: "/"
  }));

  app.get("/logout", function(req,res) {
    req.logout();
    res.redirect("/login");
  });
  
  //Post route for saving new question
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