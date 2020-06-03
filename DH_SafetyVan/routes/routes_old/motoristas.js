const express = require('express');

const routes = express.Router();


routes.get('/motoristas', (req, res)=>{
    res.render('motoristas')
})


module.exports = routes