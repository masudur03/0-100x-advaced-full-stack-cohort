const mongoose = require('mongoose');

//mongo connection: mongodb+srv://rmasudur815:<password>@cluster0.vko7lpx.mongodb.net/
// Connect to MongoDB
mongoose.connect("mongodb+srv://rmasudur815:Monim4321@cluster0.vko7lpx.mongodb.net/");

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,

});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}