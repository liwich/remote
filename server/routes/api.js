const express = require('express');
const router = express.Router();

const connection = (closure) => {
    
};

const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

let response = {
    status: 200,
    data: [],
    message: null
};

router.get('/profile', (req, res) => {
    res.json(response);
});

module.exports = router;