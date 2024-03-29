const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Admin, User, Course } = require("../db");
const { JWT_SECRET } = require("../config")
const jwt = require("jsonwebtoken");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password,
    })
    res.json({
        message: "new user created"
    })

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({});

    res.json({
        Courses: allCourses
    })
});

//router.use(userMiddleware);

router.post('/signin', async (req, res) => {
    // Implement user signin logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({
        username,
        password
    })

    if (user) {
        const token = jwt.sing({ username }, JWT_SECRET);
        res.json({
            jwt_token: token,
        })
    } else {
        res.json({
            message: "wrong user password"
        })
    }

});


router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseID;
    const username = req.username;

    try {
        //input the course id in the users db
        await User.updateOne({
            username
        }, {
            "$push": courseId,
        });

        res.json({
            message: "course purchased successfully!"
        })
    } catch (e) {
        res.json({
            message: "someting went wrong try again"
        })
    }


});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;
    const user = await User.findOne({
        username,
    });
    const purchased_courses = user.purchasedCourses;
    res.json({
        purchased_courses,
    })
});

module.exports = router