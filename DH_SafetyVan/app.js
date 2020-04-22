const express = require('express')
const methodOverride = require('method-override')

let rotasIndex = require('./routes/indexRoute.js')
let rotasLog =require('./routes/logRoute')
let rotasSeguranca = require('./routes/segurancaRoute')
let rotascadastroUsuario = require('./routes/cadastroUsRoute')
let rotascadastroParceiro = require('./routes/cadastroParceiroRoute')



let app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'));
app.use(express.urlencoded({
    extended:true
}))
app.use(methodOverride('_method'))

app.use(rotasIndex)
app.use(rotasLog)
app.use(rotasSeguranca)
app.use(rotascadastroUsuario)
app.use(rotascadastroParceiro)



app.listen(3000, ()=>console.log("Servidor rodando "))