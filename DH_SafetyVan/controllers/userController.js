const bcrypt = require('bcrypt');
const moment = require('moment');
const { User, Address, Parent, Driver } = require('../models');

const userController = {
    index: async (req, res) => {
        if (req.session.user.roles_id == 1) return res.redirect('/admin');

        const usuario = await User.findByPk(req.session.user.id, { include: Address });

        if (usuario.roles_id == 2) {
            const parent = await Parent.findOne({
                where: {
                    users_id: usuario.id,
                },
                include: {
                    model: Driver,
                    include: {
                        model: User,
                    }
                },
            });

            return res.render('usuario', { usuario, parent, moment });
        }

        if (usuario.roles_id == 3) {
            const driver = await Driver.findOne({
                where: {
                    users_id: usuario.id
                },
                include: {
                    model: Parent,
                    include: {
                        model: User,
                    }
                }
            });

            return res.render('usuario', { usuario, driver, moment });
        }
    },

    show: async (req, res) => {
        const { id } = req.params;

        const usuario = await User.findByPk(id);

        if (usuario.roles_id == 2) {
            const parent = await Parent.findOne({
                where:
                {
                    users_id: id
                },
                include:
                {
                    model: Driver,
                    include: User
                }
            });
            return res.render('perfil', { usuario, parent });
        };

        if (usuario.roles_id == 3) {
            const driver = await Driver.findOne({
                where:
                {
                    users_id: id
                },
                include:
                {
                    model: Parent,
                    include: User
                }
            });
            return res.render('perfil', { usuario, driver });
        }
    },

    create: (_req, res) => {
        return res.render('cadastro');
    },

    store: async (req, res) => {
        const { name, email, password, role } = req.body;
        const passwordHash = bcrypt.hashSync(password, 10);

        if (role == 'parent') {
            const user = await User.create({
                name,
                email,
                password: passwordHash,
                roles_id: 2,
            });

            req.session.user = {
                id: user.id,
                name: user.name,
                email: user.email,
                roles_id: 2,
            };

            return res.redirect('/user/parent');
        }
        if (role == 'driver') {
            const user = await User.create({
                name,
                email,
                password: passwordHash,
                roles_id: 3,
            });

            req.session.user = {
                id: user.id,
                name: user.name,
                email: user.email,
                roles_id: 3,
            };

            return res.redirect('/user/driver');
        }

        return res.redirect('/cadastro', { msg: "Erro ao fazer o cadastro. Por favor, tente novamente." });

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

        const address = await Address.create({
            cep,
            street: rua,
            complemento,
            district: bairro,
            city: cidade,
            uf,
            users_id: user.id,
        });

        const parent = await Parent.create({

            users_id: user.id
        })

        return res.redirect('/user');
    },

    driver: (_req, res) => {
        return res.render('cadastroDriver');
    },

    storeDriver: async (req, res) => {
        const { cpf, birthdate, phone, cep, rua, complemento, bairro, cidade, uf, cnh, crm, marca, modelo, ano, placa, crmc, termos } = req.body;
        const id = req.session.user.id;

        const user = await User.findByPk(id);

        if (!user) return res.redirect('/login');

        user.cpf = cpf;
        user.birthdate = birthdate;
        user.phone = phone;
        await user.save();

        const address = await Address.create({
            cep,
            street: rua,
            complemento,
            district: bairro,
            city: cidade,
            uf,
            users_id: user.id,
        });

        const driver = await Driver.create({
            cnh,
            crm,
            marca,
            modelo,
            ano,
            placa,
            crmc,
            users_id: user.id,
        });

        return res.redirect('/user');
    },

    child: async (req, res) => {
        const user = await User.findByPk(req.session.user.id);
        const [endereco] = await user.getAddresses();

        return res.render('cadastroChild', { endereco });
    },
    editarCarro: async (req, res) => {
        Driver.update({
            marca: req.body.marca,
            modelo: req.body.modelo,
            ano: req.body.ano,
            placa: req.body.placa,
            crmc: req.body.crmc
        },{where:{
            users_id:req.session.user.id 
        }}

        )
        return res.redirect('/user');

    },
    editarSobre: async (req, res) => {

        Driver.update({
            sobre:req.body.sobre
        },{where:{
            users_id:req.session.user.id 
        }}

        )
        return res.redirect('/user');

    },

    storeChild: (req, res) => {

    },
    changeInfos: (_req, res) => {
        return res.render('MudarInfosMotoristas');
    }
};

module.exports = userController;