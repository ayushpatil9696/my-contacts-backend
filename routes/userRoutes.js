const express = require("express");
const { registerUser, loginUser, currentUser } = require("../Controllers/userController");
const validateToken = require("../middleware/validateTokenhandler");


const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser)

module.exports = router;