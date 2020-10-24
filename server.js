// Dependencies
const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

const db = require("./models");
// Sets up the Express App
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/catsController.js");

app.use(routes);

// Starts the server to begin listening
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});