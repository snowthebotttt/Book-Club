const express = require('express');
const router = express.Router();

// Import middleware modules
const login = require('./loginInformation');

// Import route modules
const userRoutes = require('./userRoutes');

// Define routes
router.use('/users', userRoutes);

// Export router
module.exports = router;
