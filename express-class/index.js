const express = require("express");
const app = express();

const users = [{
    name: "john",
    kidneys: [{
        healthy: false,
    }]
}]

app.use(express.json());

//query parameters, get the kidney status
app.get("/", function (req, res) {
    const johnKidenys = users[0].kidneys;
    const numberOfkidneys = johnKidenys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < johnKidenys.length; i++) {
        if (johnKidenys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidenys = numberOfkidneys - numberOfHealthyKidneys;
    res.json({
        numberOfkidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidenys,
    })
})

//you send data in the body. add a kidney
app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy,
    })
    res.json({
        msg: "done!"
    })
})

//heal bad kidney
app.put("/", function (req, res) {

    //if all kidnet already healthy
    if (unhealthyCheck()) {
        for (let i = 0; i < users[0].kidneys.length; i++) {
            users[0].kidneys[i].healthy = true;
        }
        res.json({
        });
    } else {
        res.status(411).json({
            msg: "all kidneys are already healthy"
        })
    }

})


//delete bad kidneys
app.delete("/", function (req, res) {
    //only if one bad unhealthy kdiney is there then delete bad kidney
    if (unhealthyCheck()) {
        const newKidneys = [];
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            msg: "done"
        });
    } else {
        res.status(411).json({
            msg: "you have no bad kidneys"
        })
    }

})

function unhealthyCheck() {
    let atLeastOneUnhealthy = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atLeastOneUnhealthy = true;
        }
    }
    return atLeastOneUnhealthy;
}

app.listen(3000);