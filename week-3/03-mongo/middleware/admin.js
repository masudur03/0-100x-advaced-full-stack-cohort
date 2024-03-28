const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let username = req.body.username;
    let password = req.boyd.password;

    //check if the user name exist ont he admin db
    Admin.findOne({
        username: username,
        password: password
    })
        //after checking for user pass
        .then(value => {
            //if value is true allows access via next()
            if (value) {
                next()
            } else {
                //eles they dont have access to the admin route
                res.status(403).json({
                    msg: "admin dosent exist"
                })
            }
        })
}

module.exports = adminMiddleware;