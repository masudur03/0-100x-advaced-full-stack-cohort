const { User } = require("../db")

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    username = req.body.username;
    password = req.body.password;


    User.findOne({
        username: username,
        password: password,
    }).then((value) => {
        if (value) {
            next();
        } else {
            res.status(403).json({
                msg: "User dosent exist"
            })
        }
    })
}

module.exports = userMiddleware;