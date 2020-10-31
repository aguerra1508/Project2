// Dependencies
const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
require("dotenv").config();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.subscribe(express.json());

// Require models
const db = require("./models");

// Sets up the Express App
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

<<<<<<< HEAD


require("./routes/questions-api-routes")(app);
=======
require("./routes/api-routes.js")(app);
>>>>>>> eaf52b1bbbb0d3467d717c7e45aa6bc1b1bd6fe1
require("./routes/html-routes.js")(app);

// Starts the server to begin listening
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT https://localhost" + PORT);
  });
});