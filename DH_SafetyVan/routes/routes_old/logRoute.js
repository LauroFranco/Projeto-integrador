const express = require('express');

const routes = express.Router();


routes.get('/login', (req, res)=>{
    res.render('login')
})

routes.get('/singup', (req, res)=>{
    res.render('singUp')
})

module.exports = routes