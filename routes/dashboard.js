const express = require('express');
const routes = express.Router();

routes.get('/:userid', (req, res) => {
    const userid = req.params.userid;
    res.render('dashboard');
});

module.exports = routes;
