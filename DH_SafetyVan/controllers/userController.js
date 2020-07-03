const bcrypt = require('bcrypt');
const moment = require('moment');
const { User, Address, Parent, Driver, Kid, School, driverinfo } = require('../models');

const userController = {
    index: async (req, res) => {
        if (req.session.user.roles_id == 1) return res.redirect('/admin');

        const usuario = await User.findByPk(req.session.user.id, { include: Address });

        if (usuario.roles_id == 2) {
            const parent = await Parent.findOne({
                where: {
                    users_id: usuario.id,
                },
                include: [{
                    model: Driver,
                    include: {
                        model: User,
                    }
                },
                {
                    model: Kid,
                    include: School,
                }
                ],
            });

            return res.render('usuario', { usuario, parent, moment });
        }

        if (usuario.roles_id == 3) {
            const driver = await Driver.findOne({
                where: {
                    users_id: usuario.id
                },
                include: [{
                    model: Parent,
                    include: {
                        model: User,
                    }
                },
                {
                    model: School,
                }
                ]
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
                    [
                        {
                            model: Driver,
                            include: User
                        },
                        {
                            model: Kid,
                            include: School
                        }
                    ]
            });
            return res.render('perfil', { usuario, parent, moment });
        };

        if (usuario.roles_id == 3) {
            const driver = await Driver.findOne({
                where:
                {
                    users_id: id
                },
                include:
                    [
                        {
                            model: Parent,
                            include: User
                        },
                        {
                            model: School,
                        },
                    ]
            });
            const infodriver = await driverinfo.findOne({ where: { driver_id: driver.id } })
            console.log(infodriver);
            return res.render('perfil', { usuario,infodriver, driver, moment });
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
        const schools = await School.findAll();

        return res.render('cadastroChild', { endereco, schools });
    },

    storeChild: async (req, res) => {
        const { nameCrianca, birthdateCrianca, alergic, idEscola, emailParent } = req.body;

        const user = await User.findOne({
            where: {
                email: emailParent
            }
        });
        const parent = await Parent.findOne({
            where: {
                users_id: user.id
            }
        })
        const crianca = await Kid.create({
            name: nameCrianca,
            birthdate: birthdateCrianca,
            parents_id: parent.id,
            schools_id: idEscola
        });

        return res.redirect('/user');
    },

    edit: async (req, res) => {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (user.roles_id == 1) return res.render('editAdmin', { user });
        if (user.roles_id == 2) {
            const parent = await Parent.findOne({
                where: {
                    users_id: user.id
                },
                include: { model: User, include: Address }
            })
            return res.render('editParent', { parent });
        }
        if (user.roles_id == 3) {
            const driver = await Driver.findOne({
                where: {
                    users_id: user.id
                },
                include: { model: User, include: Address }
            })
            return res.render('editDriver', { driver });
        }
    },

    update: async (req, res) => {
        const { id } = req.params;
        const { name, cpf, birthdate, phone, about, cep, rua, complemento, bairro, cidade, uf } = req.body;

        const user = await User.findByPk(id, { include: Address });

        user.name = name;
        user.cpf = cpf;
        user.birthdate = birthdate;
        user.phone = phone;

        user.Addresses.forEach(async (address) => {
            address.cep = cep;
            address.street = rua;
            address.complemento = complemento;
            address.district = bairro;
            address.city = cidade;
            address.uf = uf;
            await address.save();
        });

        await user.save();

        if (user.roles_id == 2) {
            return res.redirect('/user');
        }

        if (user.roles_id == 3) {
            const { cnh, crm, marca, modelo, ano, placa, crmc } = req.body;
            const driver = await Driver.findOne({ where: { users_id: user.id } });

            driver.cnh = cnh;
            driver.crm = crm;
            driver.marca = marca;
            driver.modelo = modelo;
            driver.ano = ano;
            driver.placa = placa;
            driver.crmc = crmc;
            driver.sobre = about;
            await driver.save();

            return res.redirect('/user');
        }
    },

    delete: async (req, res) => {
        const { id } = req.params;

        await User.destroy({
            where: {
                id
            }
        })
            .catch((e) => {
                return res.redirect('/');
            })

        return res.redirect('/user');
    },

    search: async (req, res) => {
        const { type } = req.params;

        if (type == "parent") {
            await Parent.findAll({
                include: User
            })
                .then(parents => {
                    return res.render("search", { parents, type });
                })
                .catch(error => {
                    return res.render("search", { error });
                })
        }
        if (type == "driver") {
            await Driver.findAll({
                include: User
            })
                .then(drivers => {
                    return res.render("search", { drivers, type });
                })
                .catch(error => {
                    return res.render("search", { error });
                })
        }
        if (type == "school") {
            await School.findAll()
                .then(schools => {
                    return res.render("search", { schools, type });
                })
                .catch(error => {
                    return res.render("search", { error });
                })
        }
    },

    adicionaDriver: async (req, res) => {
        const { idDriver } = req.body;
        const parent = await Parent.findOne({ where: { users_id: req.session.user.id } });
        const driver = await Driver.findByPk(idDriver);

        if (await parent.hasDriver(driver)) {
            return res.redirect('/');
        } else {
            await parent.addDriver(driver);
            return res.redirect('/user');
        }
    },

    adicionaSchool: async (req, res) => {
        const { idSchool } = req.body;
        const driver = await Driver.findOne({ where: { users_id: req.session.user.id } });
        const school = await School.findByPk(idSchool);

        if (await driver.hasSchool(school)) {
            return res.redirect('/');
        } else {
            await driver.addSchool(school);
            return res.redirect('/user');
        }
    },

    editarCarro: async (req, res) => {
        await Driver.update({
            marca: req.body.marca,
            modelo: req.body.modelo,
            ano: req.body.ano,
            placa: req.body.placa,
            crmc: req.body.crmc
        }, {
            where: {
                users_id: req.session.user.id
            }
        });

        return res.redirect('/user');
    },

    editarSobre: async (req, res) => {

        await Driver.update({
            sobre: req.body.sobre
        }, {
            where: {
                users_id: req.session.user.id
            }
        });

        return res.redirect('/user');
    },

    editarEmail: async (req, res) => {

        await user.update({
            phone: req.body.telefone
        }, {
            where: {
                users_id: req.session.user.id
            }
        });

        return res.redirect('/user');
    },

    editarTelefone: async (req, res) => {
        const { id } = req.params;
        const user = await User.findByPk(id);
        await user.update({
            telefone: req.body.email
        }, {
            where: {
                users_id: req.session.user.id
            }
        });

        return res.redirect('/user');
    },

    changeInfos: (_req, res) => {
        return res.render('MudarInfosMotoristas');
    },
    postarfoto: async (req, res) => {
        const [foto] = req.files;
        await User.update({
            picture: foto.filename
        }, {
            where: {
                id: req.session.user.id
            }
        });

        return res.redirect('/user');
    },
    adicionaisVan: async (req, res) => {
        const driver = await Driver.findOne({ where: { users_id: req.session.user.id } });
        const infodriver = await driverinfo.findOne({ where: { driver_id: driver.id } })
        
        var cadeira;
        var cadeirinha;
        if (req.body.cadeiraRoda == undefined) { cadeira = false } else { cadeira = true }
        if (req.body.cadeirinha == undefined) { cadeirinha = false } else { cadeirinha = true }

        if (infodriver != null) {
            await driverinfo.update({
                cadeiraRoda: cadeira,
                cadeirinha: cadeirinha,
                Idiomas: req.body.idiomas,
                qntCriancas: req.body.qntCrianca,
                ajudante: req.body.nameAjudante
            }, {
                where: {
                    driver_id: driver.id
                }
            });
        }else{
            await driverinfo.create({
                cadeiraRoda: cadeira,
                cadeirinha: cadeirinha,
                Idiomas: req.body.idiomas,
                qntCriancas: req.body.qntCrianca,
                ajudante: req.body.nameAjudante,
                driver_id: driver.id
            }) 
        }
        return res.redirect('/user');
    }
};

module.exports = userController;