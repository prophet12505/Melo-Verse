
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const path = require("path");
const crypto = require("crypto");
const User = require("../models/User");



router.get("/", (req, res) => {
  res.json({ message: "Welcome to Meloverse" });
});
// backend json format:
// {
//     message:"",
//     payload:{},
//     status:0,
// }
//     status 0 is the default seccess status

router.post('/', (req, res) => {
    const { username, password } = req.body;

    // Find user
    const user = users.find(user => user.username === username && user.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful', payload:user,status:0 });
});

module.exports = router;
