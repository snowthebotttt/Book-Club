const express = require("express");
const router = express.Router();

// Import middleware modules
// const login = require('../../public/js/login')

// Import route modules
const userRoutes = require("./usersController");

// Define routes
// router.use("/users", userRoutes);

// Export router
module.exports = router;
