const express = require("express");
const mongoose = require("mongoose");
const app = express()

mongoose.connect(
    "mongodb+srv://rmasudur815:Monim4321@cluster0.vko7lpx.mongodb.net/",
);

const User = mongoose.model("Users", {
    name: String,
    email: String,
    password: String,
});

app.post("/signup", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({ email: username });

    if (exisitingUser) {
        return res.status(400).send("username already exist");
    }

    const user = new User({
        name: "harkirat singh",
        email: "tzirw@example.com",
        password: "1234",
    });
    user.save();
    res.json({ "msg": "user created succefully" })

})

app.listen(3000);




