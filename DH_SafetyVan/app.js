const express = require('express')

let rotasIndex = require('./routes/indexRoute.js')

let app = express()

app.use(rotasIndex)


app.listen(3000, ()=>console.log("Servidor rodando "))