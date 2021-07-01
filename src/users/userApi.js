var express = require("express");
var router = express.Router();

const userService = require("./userService");

router.get("/user", (request, response, next) => {
    userService.getUsers()
        .then((results) => {
            response.status(200).json(results);
        })
        .catch((error) => {
            next(error);
        });
});

router.get('/user/:id',  (request, response, next) => {
    userService.getUser(request.params.id)
        .then((results) => {
            response.status(200).json(results);
        })
        .catch((error) => {
            next(error);
        });
});

module.exports = router;