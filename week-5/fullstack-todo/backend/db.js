/*
    todo{
        title: string;
        description: string;
        completed: boolean
    }
*/

const mongoose = require('mongoose');


try {
    mongoose.connect("mongodb+srv://rmasudur815:vvHioQgtqMAhV9Ug@cluster0.vko7lpx.mongodb.net/tododb")
} catch (e) {
    console.log("mongodb conenction error")
}
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}