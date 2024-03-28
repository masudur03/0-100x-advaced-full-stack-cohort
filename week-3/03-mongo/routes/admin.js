const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db")
const router = Router();


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    username = req.body.username;
    password = req.body.password;

    //add these to the admin database
    await Admin.create({
        username: username,
        password: password,
    }) //NOTICE: this is a async function so we use .then or await for the db to update and then send a response
    res.json({
        message: "Admin created successfully"
    })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    //we can use zod here for input validation

    //add the course in the db
    const newCourse = await Course.create({
        title,
        description,
        price,
        imageLink,
    })
    res.json({
        message: 'Course created successfully',
        courseId: newCourse._id,
    })


});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({})

    res.json({
        courses: response
    })
});

module.exports = router;