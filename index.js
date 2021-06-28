const express = require("express");
const app = express();
var bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

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

app.listen(port, () => {
    console.log(`Applimedia App listening at http://localhost:${port}`);
});

module.exports = app;