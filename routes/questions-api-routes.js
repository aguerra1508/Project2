const db = require("../models/questions");
module.exports = function(app) {
  app.get("/api/q", function(req,res) {
    db.Questions.findOne({
      where: {
        question: req.params.question
      }
    }).then(function(dbQuestions){

      res.json(dbQuestions);
      console.log(dbQuestions);
    });
  });
};