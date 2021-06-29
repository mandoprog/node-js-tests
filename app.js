const express = require("express");
const app = express();
var bodyParser = require("body-parser");

// Parsing body data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Pulic Routes
app.get("/", (req, res) => {
    winston.info("index app");
    res.json("APP UP");
});
const userApi = require("./src/users/userAPI");
app.use("/", userApi);


module.exports = app;