const express = require('express');

const routes = express.Router();


routes.get('/cadastroParceiro', (req, res)=>{
    res.render('cadastroParceiro')
})



module.exports = routes