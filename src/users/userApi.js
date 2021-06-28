var express = require("express");
var router = express.Router();

const userService = require("./userService");

router.get("/user", (request, response, next) => {
    console.log('in users ')
    userService.getUsers()
        .then((results) => {
            response.status(200).json(results);
        })
        .catch((error) => {
            next(error);
        });
});

module.exports = router;