const express = require("express");

const app = express();

//functiont that returns a boolean if the age of the person is more than 14
function isOldEnough(age) {
    return age >= 14;
}

function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    } else {
        res.status(411).json({
            msg: "sorry you are  not of age",
        });
    }
}

app.user(isOldEnoughMiddleware);

app.get("/ride1", function (req, res) {
    res.json({
        msg: "you have succefully ridden ride 1",
    });
});

app.get("/ride2", function (req, res) {
    res.json({
        msg: "you have succefully ridden ride 2",
    });
});

app.listen(3000);
