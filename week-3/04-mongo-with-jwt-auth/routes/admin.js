const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

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

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const user = await Admin.findOne({
        username,
        password
    })

    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            token
        })
    } else {
        res.status(411).json({
            message: "incorrect credentials"
        })
    }

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
    // Implement fetching all courses logic
    try {
        const response = await Course.find({})
        res.json({
            courses: response
        })
    } catch (e) {
        res.json({
            msg: "incorrect inputs"
        })
    }

});

module.exports = router;