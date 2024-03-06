const express = require('express');
const routes = express.Router();
const { borrar_objeto_user } = require('./db');


routes.post('/userid/:id', async (req, res) => {
    const id = req.params.id;
    const userid = req.params.userid;
    

    await borrar_objeto_user( id );

    res.redirect(`/dashboard/${userid}`);
});

module.exports = routes;
