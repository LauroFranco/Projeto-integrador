const express = require('express')
const methodOverride = require('method-override')
const session = require('express-session')

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
app.use(function(req, res, next) {
    res.locals.user = req.session.user;
    next();
  });

app.use(indexRouter);
app.use('/user', userRouter);
app.use('/admin', adminRouter);

app.listen(3000, ()=>console.log("Servidor rodando "))