const express = require('express');
const router = express.Router();

const credentials = require('../credentials');

// GET '/'
router.get('/', function(req, res, next) {
    return res.send("hello world");
});

module.exports = router;
