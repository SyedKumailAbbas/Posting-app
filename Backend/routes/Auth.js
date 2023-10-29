const express = require("express");
const { User } = require("../models");
const bcrypt = require("bcrypt");
const router = express.Router();

router.get('/', (req, res) => {
    res.json("hello");
});

//user registration
router.post('/', async (req, res) => {
    const { username, firstname, lastname, gender, phoneno, email, password } = req.body;

    try {
        const hash = await bcrypt.hash(password, 10);
        const user = await User.create({
            username: username,
            firstname: firstname,
            lastname: lastname,
            gender: gender,
            phoneno: phoneno,
            email: email,
            password: hash
        });
        res.status(201).json(user);
    } catch (error) {
        console.error("Error in creating user:", error);
        res.status(500).json({ error: "Could not create user" });
    }
});

//user login
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username: username } });

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    bcrypt.compare(password, user.password).then((match) => {
        if (match) {
            return res.json("You're logged in");
        } else {
            return res.status(401).json({ error: "Incorrect password" });
        }
    }).catch((error) => {
        return res.status(500).json({ error: "An error occurred while comparing passwords" });
    });
});




module.exports = router;
