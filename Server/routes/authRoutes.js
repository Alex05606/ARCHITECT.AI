const express = require("express");
const router = express.Router();

// IMPORT CONTROLLER
const { registerUser, loginUser } = require("../controllers/authController");

// REGISTER ROUTE
router.post("/register", registerUser);

// LOGIN ROUTE
router.post("/login", loginUser);

module.exports = router;