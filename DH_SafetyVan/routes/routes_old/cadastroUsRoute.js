const express = require('express');
const routes = express.Router();

routes.get('/cadastroUsuario', (req, res)=>{
    res.render('cadastroUsuario' );
})



module.exports = routes