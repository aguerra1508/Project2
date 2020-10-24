// Dependencies
var express = require("express");
var db = require("./models");
var mysql = require("mysql");
require('dotenv').config()

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Starts the server to begin listening
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});