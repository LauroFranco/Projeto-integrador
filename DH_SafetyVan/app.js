const express = require('express')
const methodOverride = require('method-override')

let rotasIndex = require('./routes/indexRoute.js')

let app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'));
app.use(express.urlencoded({
    extended:true
}))
app.use(methodOverride('_method'))

app.use(rotasIndex)

app.listen(3000, ()=>console.log("Servidor rodando "))