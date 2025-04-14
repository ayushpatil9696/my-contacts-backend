const express = require("express");

const router = express.router();

router.post("/register", (req, res) => {
    res.json({ message: "register the user " });
});

router.post("/login", (req, res) => {
    res.json({ message: "login user" });
});

router.post("/current", (req, res) => {
    res.json({ message: "Current user information" });
})

module.exports = router;