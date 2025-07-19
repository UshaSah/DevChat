const express = require('express');
const router = express.Router();

// @route    GET api/auth
// @desc     Test route
// @access   Public
router.get('/', (req, res) => {
    try {
        res.json({ message: 'Auth route working' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;