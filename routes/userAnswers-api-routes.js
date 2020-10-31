const db = require("../models");

module.exports = function(app) {
  app.get("/api/UserAnswers", function(req,res) {
    db.UserAnswers.findAll({}).then(function(dbUserAnswers) {
      res.json(dbUserAnswers);
    });
  });
};