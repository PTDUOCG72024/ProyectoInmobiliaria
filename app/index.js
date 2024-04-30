module.exports = (app) => {
    app.use('/', require('./routes'));
}

// Path: app/routes/index.js
const express = require('express');
const router = express.Router();
const path = require('path');

module.exports = router;

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/login.html'));
});