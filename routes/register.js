const express = require('express');
const routes = express.Router();
const bcrypt = require('bcryptjs');
const { anadir_user } = require('./db');

routes.get('/', (req, res) => {
    res.render('register');
});

routes.post('/', async (req, res) => {
    const { nombre, email, pass } = req.body;

    const pass_crypt = await bcrypt.hash(pass, 8);

    await anadir_user({ nombre: nombre, email: email, pass: pass_crypt });

    res.redirect('/login');
});

module.exports = routes;
