// Dependencies
var path = require("path");

// Routes
module.exports = function (app) {
    // index route 
    app.get("/index", function (req, res) {
        res.render("index", data);
    });
    // main route
    app.get("/main", function (req, res) {
        res.render("main", data);
    });
};