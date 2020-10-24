// Dependencies
const express = require("express");
const db = require("./models");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;
require("dotenv").config();

// Starts the server to begin listening
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});