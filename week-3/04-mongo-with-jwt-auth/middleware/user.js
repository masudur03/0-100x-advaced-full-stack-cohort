const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config")
const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    //Bearer <jwt>
    const words = token.split(" ") //because the input is Breaer <toke>
    const jwtToken = words[1] //this gives me just the token
    const verifyValue = jwt.verify(jwtToken, JWT_SECRET);

    //token contains the username endcoded into into it, verify valude decodes it
    if (verifyValue.username) { //so if verifyValue.username exist, its is valid token
        next()
    } else {
        res.status(403).json({
            msg: "You are not  authenticated"
        })
    }
}

module.exports = userMiddleware;