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
  password: "-8Rbc12?",
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

// Reservation (DATA)
// =============================================================
var reservations = [
  {
    id: "1",
    maindiner: "Yoda",
    cell: 8888888888,
    email: "abc@phony.com",
    diners: 2
  },
  {
    id: "1",
    maindiner: "Yoda",
    cell: 8888888888,
    email: "abc@phony.com",
    diners: 2 
   },
  {
    id: "3",
    maindiner: "Marie",
    cell: 8888888888,
    email: "abc@phony.com",
    diners: 6
  }
];

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

// Displays all reservations
app.get("/api/reservations", function(req, res) {
  return res.json(reservations);
});

// Displays a single character, or returns false
app.get("/api/reservations/:reservations", function(req, res) {
  var recorded = req.params.reservation;

  console.log(chosen);

  for (var i = 0; i < reservations.length; i++) {
    if (chosen === reservations[i].routeName) {
      return res.json(reservations[i]);
    }
  }

  return res.json(false);
});

// Create New Reservation - takes in JSON input
app.post("/api/reservations", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservations = req.body;

  console.log(newReservations);

  reservations.push(newReservations);

  res.json(newReservations);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
