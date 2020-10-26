const db = require("../models");
const Question = require("../models/questions");

module.exports = function(app) {
    app.get("/api/:question", function(req,res) {
        db.findAll({}).then(function(dbQuestion){
            res.json(dbQuestion);
        });
    });

    app.get("/api/:answer", function(req,res){
        db.findOne({}).then(function(dbAnswer){
            res.json(dbanswer);
        });
    });

    app.post("/api/question", function)
}