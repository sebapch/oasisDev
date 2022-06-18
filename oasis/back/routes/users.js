const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/user.model");

//router post to add user with name, seniority, main stack, skills, location, rate, english and remote
router.post("/register", async (req, res) => {
    let {
        name,
        seniority,
        mainStack,
        skills,
        location,
        rate,
        english,
        remote,
    } = req.body;
    //push user to database
    const newUser = new User({
        name,
        seniority,
        mainStack,
        skills,
        location,
        rate,
        english,
        remote,
    });
    try {
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (err) {
        res.status(400).send(err.message);
    }
    
}
);


module.exports = router;
