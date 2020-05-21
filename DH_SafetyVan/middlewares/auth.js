module.exports = (req, res, next) => {
    //usuário não está logado
    if (!req.session.user) return res.redirect('/login');

    //usuário está logado
    res.locals.user = req.session.user;
    next();
}