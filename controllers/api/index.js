const express = require("express");
const router = express.Router();
var app = express();

// Import middleware modules
const login = require("./loginInformation");

// Import route modules
const userRoutes = require("./usersController");

// Define routes
router.use("/users", userRoutes);



// Export router
module.exports = router;
