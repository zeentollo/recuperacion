const express = require('express');
const routes = express.Router();
const { anadir_objeto_user } = require('./db');

routes.get('/:userid', (req, res) => {
    const userid = req.params.userid;
    res.render('anadir_tarea', { userid: userid });
});

routes.post('/:userid', async (req, res) => {
    const userid = req.params.userid;

    const { nombre, descripcion, foto } = req.body;
    console.log(req.body);

    await anadir_objeto_user( userid, nombre, descripcion, foto );

    res.redirect(`/dashboard/${userid}`);
});

module.exports = routes;
