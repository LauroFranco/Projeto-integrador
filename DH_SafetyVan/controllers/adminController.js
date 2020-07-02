const {User, School} = require('../models');

const adminController = {
    index: async (req, res) => {
        const admin = await User.findByPk(req.session.user.id);
        
        return res.render('admin', {admin});
    },

    school: (req, res) => {
        return res.render('cadastroSchool');
    },

    storeSchool: async (req, res) => {
        const {name, resp, email, phone, cep, rua, complemento, bairro, cidade, uf, termos} = req.body;

        const escola = await School.create({
            name,
            email,
            phone,
            resp,
            cep,
            street: rua,
            complemento,
            district: bairro,
            city: cidade,
            uf
        });

        if(!escola) return res.redirect('/admin/school', {msg: "Não foi possível cadastrar a escola no momento"});

        return res.redirect('/admin');
    },

    showAllUsers: async(req, res) => {
        await User.findAll()
        .then(users => {
            return res.status(201).json(users);
        })
        .catch(error => {
            return res.redirect(admin, {error});
        })
    },

    showAllSchools: async(req, res) => {
        await School.findAll()
        .then(schools => {
            return res.status(201).json(schools);
        })
        .catch(error => {
            return res.redirect(admin, {error});
        })
    }
};

module.exports = adminController;