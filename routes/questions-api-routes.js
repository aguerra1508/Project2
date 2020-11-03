/*const db = require("../models");
module.exports = function(app) {
  console.log("passed");
  app.get("/api/questions/:id", function(req,res) {
    db.Questions.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbQuestions) {
      res.json(dbQuestions);
    });
  });
};*/