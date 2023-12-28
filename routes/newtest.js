// routes/apiRoutes.js
const express = require('express');
var  router = express.Router();

// Define your API routes
router.get('/', (req, res) => {
    // Handle your API logic here
    res.json({ message: 'Hello from Express API!' });
});

module.exports = router;
