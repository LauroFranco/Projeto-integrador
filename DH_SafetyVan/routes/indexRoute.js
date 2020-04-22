const express = require('express');

const routes = express.Router();


routes.get('/', (req, res)=>{
    res.render('index')
})

routes.get('/usuario', (req, res)=>{
    res.render('usuarioLogado')
})

module.exports = routes