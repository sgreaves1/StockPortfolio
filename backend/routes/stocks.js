const express = require('express');
const router = express.Router();
const HttpStatus = require('literal-http-status');

router.get('/:stockName', async function (req, res) {
    res.status(HttpStatus['OK']).json({jp: "true"});
});

router.get('/', async function (req, res) {
    res.status(HttpStatus['OK']).json({live: "true"});
});

module.exports = router;