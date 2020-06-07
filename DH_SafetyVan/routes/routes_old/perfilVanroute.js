const express = require('express');

const routes = express.Router();


routes.get('/perfil/joao', (req, res)=>{
    res.render('perfil_van')
})



module.exports = routes