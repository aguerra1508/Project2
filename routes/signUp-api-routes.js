/*const db = require("../models");
module.exports = function(app) {
  app.post("/api/users/", function(req,res){
    db.Users.create({
      name: req.body.name,
      email: req.body.email,
      score: req.body.score,
      password: req.body.rank
    }).then(function(dbUsers){
      console.log(dbUsers);
      res.json(dbUsers);
    });
  });
};*/