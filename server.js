"use strict";
const process = require("process");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/form-submit", (req, res) => {
  console.log(req.body);

  const user = req.body["USER"];
  if (user) {
    res.status(200).json({ message: "User data received" });
  } else {
    res.status(400).json({ message: "User data not received" });
  }
});

app.listen(process.env.PORT || 3000, (error) => {
  console.log("Server running on port", process.env.PORT || 3000);
});
