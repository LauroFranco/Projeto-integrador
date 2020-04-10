const express = require('express');

const routes = express.Router();


routes.get('/', (req, res)=>{
    console.log("ta na home")
})

module.exports = routes