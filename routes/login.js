const express = require('express');
const routes = express.Router();
const bcrypt = require('bcryptjs');
const { comprobar_user } = require('./db');

routes.get('/', (req, res) => {
    res.render('login');
});

routes.post('/', async (req, res) => {
    const { email, pass } = req.body;
    
    const pass_crypt = await bcrypt.hash(pass, 8);    

    const usuario_login = await comprobar_user(email, pass);

    if (usuario_login === 0) {
        res.redirect('/admin');
    }else if (usuario_login) {
        res.redirect(`/dashboard/${usuario_login}`);
    }else{
        res.redirect('/register');
    }
    
});

module.exports = routes;


