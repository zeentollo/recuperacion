const express = require('express');
const routes = express.Router();
const { todos_users, todos_objetos } = require('./db');

routes.get('/', async (req, res) => {
    const usuarios = await todos_users();
    const objetos = await todos_objetos();

    res.render('admin', { usuarios: usuarios, objetos: objetos });
});

module.exports = routes