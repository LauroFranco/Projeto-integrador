const express = require('express')
const methodOverride = require('method-override')

let rotasIndex = require('./routes/indexRoute.js')

let app = express()

app.use(rotasIndex)

app.use(express.static('public'));
app.use(methodOverride('_method'))

app.set('view engine', 'ejs')

app.use(express.urlencoded({
    extended:true
}))

app.listen(3000, ()=>console.log("Servidor rodando "))