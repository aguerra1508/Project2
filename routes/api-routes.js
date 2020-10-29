const db = require("../models");


module.exports = function(app) {

  app.get("/", function(req,res){
    res.send("works");
  });
    
  /*app.get("/api/users/", function(req,res) {
    db.User.findAll({}).then(function(dbUser) {
      console.log(dbUser);
      res.json(dbUser);
    });
  });

  app.post("/api/answers/", function(req,res){
    console.log(req.body);
    db.User.create({
      name: req.body.name,
      email: req.body.email,
    }).then(function(dbUser){
      console.log(dbUser);
      res.json(dbUser);
    });
  });
    
  app.post("/api/posts/question", function(req,res){
    console.log(req.body);
    db.Questions.create({
      question: req.body.question,
    }).then(function(dbPost){
      res.json(dbPost);
    });
  });

  app.post("/api/posts/answers", function(req,res){
    console.log(req.body);
    db.Answers.create({
      answer: req.body.answer
    }).then(function(dbAnswers){
      console.log(dbAnswers);
      res.json(dbAnswers);
    });
  });
    
  app.delete("/api/posts/:id", function(req,res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      console.log(dbUser);
      res.json(dbUser);
    });
  });

  // app.post("/api/question", function)*/
};