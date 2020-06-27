const express = require('express')
const methodOverride = require('method-override')
const path = require('path')
const session = require('express-session')

// const rotasIndex = require('./routes/indexRoute.js')
// const rotasLog =require('./routes/logRoute')
// const rotasSeguranca = require('./routes/segurancaRoute')
// const rotascadastroUsuario = require('./routes/cadastroUsRoute')
// const rotascadastroParceiro = require('./routes/cadastroParceiroRoute')
// const rotasperfilMotorista=require('./routes/perfilVanroute')
// const rotasCentralAjuda =require('./routes/centralAjudaRoute')

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');

const app = express()

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

// app.use(rotasIndex)
// app.use(rotasLog)
// app.use(rotasSeguranca)
// app.use(rotascadastroUsuario)
// app.use(rotascadastroParceiro)
// app.use(rotasperfilMotorista)
// app.use(rotasCentralAjuda)

app.use(indexRouter);
app.use('/user', userRouter);
app.use('/admin', adminRouter);

app.listen(3000, ()=>console.log("Servidor rodando "))