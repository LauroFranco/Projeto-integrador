const bcrypt = require('bcrypt');
const moment = require('moment');
const {User, Address, Driver} = require('../models');

const userController = {
    index: async (req, res) => {
        const usuario = await User.findByPk(req.session.user.id);
        const [address] = await usuario.getAddresses();
                
        return res.render('usuario', {usuario, endereco:address, moment});
    },

    show: async (req, res) => {
        const { id } = req.params;

        const driver = await Driver.findByPk(id, {
            include: User,
        });
        console.log(driver);
        return res.render('perfil', {driver});
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

        const address = await Address.create({
            cep,
            street: rua,
            complemento,
            district: bairro,
            city: cidade,
            uf,
            users_id: user.id,
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
    
    child: (_req, res) => {
        return res.render('cadastroChild');
    },
    editarCarro: async (req, res) => {
        const Us = await Driver.findOne({ where: {users_id: req.session.user.id}}).then((result)=>{console.log(result)});
        console.log(req.body);
        return res.redirect('/user');
         
    },
    editarSobre: async (req, res) => {
        const Us = await Driver.findOne({ where: {users_id: req.session.user.id}}).then((result)=>{console.log(result)});

        console.log(req.body);
        return res.redirect('/user');
    },

    storeChild: (req,res) => {
        
    },
    changeInfos:(_req ,res)=>{
        return res.render('MudarInfosMotoristas');
    }
};

module.exports = userController;