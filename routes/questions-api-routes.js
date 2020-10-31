const db = require("../models");
module.exports = function(app) {
  app.get("/api/questions/questions/:question", function(req,res) {
    db.Questions.findAll({
      where: {
        questions: req.params.question
      }
    }).then(function(dbQuestions) {
      console.log(res.question);
      res.json(dbQuestions);
    });
  });
};