const bcrypt = require('bcrypt');
const {User} = require('../models');

const authController = {
    index: (req, res) => {
        if(req.session.user) return res.redirect('/user');

        return res.render('login')
    },

    login: async (req, res) => {
        const {email, password} = req.body;

        const user = await User.findOne({
            where: {
                email
            }
        });

        if (!user || !bcrypt.compareSync(password, user.password)) {
                return res.render('login', {
                msg: "Email ou senha errado!"
            });
        }

        req.session.user = {
            id: user.id,
            name: user.name,
            email: user.email,
        };

        return res.redirect('/user');
    },

    destroy: (req, res) => {
        req.session.user = undefined;
        return res.redirect('/');
    }
};

module.exports = authController;