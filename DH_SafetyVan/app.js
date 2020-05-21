const express = require('express')
const methodOverride = require('method-override')

const path = require('path')
const session = require('express-session')

let rotasIndex = require('./routes/indexRoute.js')
let rotasLog =require('./routes/logRoute')
let rotasSeguranca = require('./routes/segurancaRoute')
let rotascadastroUsuario = require('./routes/cadastroUsRoute')
let rotascadastroParceiro = require('./routes/cadastroParceiroRoute')
let rotasperfilMotorista=require('./routes/perfilVanroute')
let rotasCentralAjuda =require('./routes/centralAjudaRoute')


let app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'));
app.use(express.urlencoded({
    extended:true
}))
app.use(methodOverride('_method'))

app.use(session({
    secret:'Safetyvan', ///senha de segurança, verificar a necessidade de alterar
    resave:true,
    saveUninitialized:true,
}))

app.use(rotasIndex)
app.use(rotasLog)
app.use(rotasSeguranca)
app.use(rotascadastroUsuario)
app.use(rotascadastroParceiro)
app.use(rotasperfilMotorista)
app.use(rotasCentralAjuda)


app.listen(3000, ()=>console.log("Servidor rodando "))