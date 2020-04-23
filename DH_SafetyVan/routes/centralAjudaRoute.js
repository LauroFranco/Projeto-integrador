const express = require('express');

const routes = express.Router();


routes.get('/centralAjuda', (req, res)=>{
    res.render('centralAjuda')
})



module.exports = routes