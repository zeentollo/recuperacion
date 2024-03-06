const express = require('express');
const routes = express.Router();
const bcrypt = require('bcryptjs');
const { actualizar_pass } = require('./db');

routes.get('/', (req, res) => {
    res.render('recuperar')
});

routes.post('/', async (req, res) => {
    const { email, pass1, pass2 } = req.body;
    if (pass1 === pass2) {
        const pass_crypt = await bcrypt.hash(pass1, 8);
        const cambio_pass = await actualizar_pass(email, pass_crypt);
        if (cambio_pass) {
            res.redirect('/login')
        } else {
            res.redirect('/recuperar')
        }
    } else {
        res.redirect('/recuperar')
    }
});

module.exports = routes