//write basic express boilerplate code,
//with express.json() middleware
const express = require('express')
const { updateSchema, createSchema } = require('./types');
const { todo } = require('./db');
const cors = require("cors")

const app = express()
const port = 3000

//any frontend can hit this backend
app.use(cors());
//require incoming reqs into json
app.use(express.json());

//body is expecting a title: stirng, description: string
//validae this using zod


app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createSchema.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            message: "you send the wrong inputs"
        })
        return;
    }

    //put the todo in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        message: "Todo created"
    })

})

app.get("/todo", async function (req, res) {
    //send the todos from the database

    //this gives me all the todos from the database
    const response = await todo.find({});
    res.json({
        response
    })
})


app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateSchema.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            message: "you send the wrong inputs"
        })
    }
    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        message: "todo marked as completed"
    })
})

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })


app.listen(3000)