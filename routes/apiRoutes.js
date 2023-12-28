// routes/apiRoutes.js
const express = require('express');
const router = express.Router();

// Define your API routes
router.get('/data', (req, res) => {
    // Handle your API logic here
    res.json({ message: 'Hello from Express API!' });
});

module.exports = router;
