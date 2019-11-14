// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Put YOUR password
  password: "",
  database: "reservations_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

// home page - Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

//http://hot-restaurant.herokuapp.com/tables
app.get("/table", function (req, res) {
    res.sendFile(path.join(__dirname, "waitinglist.html"));
});

//http://hot-restaurant.herokuapp.com/reserve
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "form.html"));
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
