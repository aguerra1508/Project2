const db = require("../models");
module.exports = function(app) {
  console.log("passed");
  app.get("/api/questions", function(req,res) {
    db.Questions.findOne({
      where: {
        questions: req.params.question
      }
    }).then(function(dbQuestions) {
      console.log(dbQuestions);
      res.json(dbQuestions);
    });
  });
};