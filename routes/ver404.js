const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.render('ver404')
});

module.exports = routes