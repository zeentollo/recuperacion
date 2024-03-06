const express = require('express');
const routes = express.Router();
const { objetos_usuario } = require('./db');

routes.get('/:userid', async (req, res) => {
    const userid = req.params.userid;
    const objetos = await objetos_usuario(userid);

    res.render('dashboard', { objetos: objetos, userid: userid });
});

module.exports = routes
