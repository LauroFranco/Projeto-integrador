const express = require('express');

const routes = express.Router();


routes.get('/seguranca', (req, res)=>{
    res.render('seguranca')
})



module.exports = routes