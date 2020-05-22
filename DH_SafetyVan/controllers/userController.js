const bcrypt = require('bcrypt');
const {User} = require('../models');

const userController = {
    index: (_req, res) => {
        return res.render('usuario');
    },

    show: (_req, res) => {
        return res.render('perfil');
    },

    create: (_req, res) => {
        return res.render('cadastro');
    },

    store: async (req, res) => {
        const {name, email, password, role} = req.body;
        const passwordHash = bcrypt.hashSync(password, 10);

        if (role == 'parent') {
            const user = await User.create({
                name,
                email,
                password: passwordHash,
            });

            req.session.user = {
                id: user.id,
                name: user.name,
                email: user.email,
            };

            return res.redirect('/user/parent');
        }
        if (user == 'driver') {
            const user = await User.create({
                name,
                email,
                password: passwordHash,
            });

            req.session.user = {
                id: user.id,
                name: user.name,
                email: user.email,
            };

            return res.redirect('/user/driver');
        }

        return res.redirect('/cadastro', { msg: "Erro ao fazer o cadastro. Por favor, tente novamente."});        

    },

    parent: (_req, res) => {
        return res.render('cadastroParent');
    },

    storeParent: async (req, res) => {
        const { cpf, birthdate, phone, cep, rua, complemento, bairro, cidade, uf, termos } = req.body;

        const id = req.session.user.id;

        const user = await User.findByPk(id);

        if (!user) return res.redirect('/login');

        user.cpf = cpf;
        user.birthdate = birthdate;
        user.phone = phone;

        await user.save();

        return res.redirect('/user');
    },

    driver: (_req, res) => {
        return res.render('cadastroDriver');
    },

    storeDriver: () => {
        
    },
    
    child: (_req, res) => {
        return res.render('cadastroChild');
    },

    storeChild: () => {
        
    }
};

module.exports = userController;