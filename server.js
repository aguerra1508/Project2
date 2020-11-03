// Dependencies
const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");
require("dotenv").config();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.subscribe(express.json());

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
//app.use(function(req,res,next){ res.locals.currentUser = req.user; next(); });

// Require models
const db = require("./models");

// Sets up the Express App
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//require("./routes/questions-api-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);



// Starts the server to begin listening
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
});