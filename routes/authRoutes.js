const express = require('express')
const router = express.Router();

// routes
router.get('/login', (req, res) => {
    res.render('login')
});

module.exports = router;