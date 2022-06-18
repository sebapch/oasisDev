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
        fechaPresentacion,
        empresa,
        experiencia,
        gmail,
        linkedin

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
        fechaPresentacion,
        empresa,
        experiencia,
        gmail,
        linkedin
    });
    try {
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (err) {
        res.status(400).send(err.message);
    }
    
}
);


router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(400).send(err.message);
    }
}
);

//brings selected user from db to edit
router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findById(id);
        res.json(user);
    } catch (err) {
        res.status(400).send(err.message);
    }
}
);

//put edited user in db
router.put("/:id", async (req, res) => {
    const { id } = req.params
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
    try {
        const user = await User.findByIdAndUpdate(id, {
            name,
            seniority,
            mainStack,
            skills,
            location,
            rate,
            english,
            remote,
        });
        res.json(user);
    } catch (err) {
        res.status(400).send(err.message);
    }
}
);

//deletes user from database
router.delete("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findByIdAndDelete(id);
        res.json(user);
    } catch (err) {
        res.status(400).send(err.message);
    }
}
);






module.exports = router;
