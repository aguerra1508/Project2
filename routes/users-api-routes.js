const db = require("../models");

module.exports = function(app) {
  
  app.get("/api/Users", function(req,res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  app.get("/api/Users/:name", function(req, res){
    db.Users.findOne({
      where: {
        name: req.params.name,
        score: req.params.score
      }
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
  
  app.post("/api/Users", function(req, res) {
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
};