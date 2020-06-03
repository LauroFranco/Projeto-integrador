const {Driver} = require("../models");
const {User} = require("../models");
const moment = require("moment");
const indexController = {
    index: (_req, res) => {
        return res.render("index");
    },

    ajuda: (_req, res) => {
        return res.render("ajuda");
    },

    seguranca: (_req, res) => {
        return res.render("seguranca");
    },
    ListaMotoristas: async (_req, res) => {
        const ListDrivers = await Driver.findAll( {
            include: User,
        });
        return res.render("motoristas" , {ListDrivers , moment});
      },
};

module.exports = indexController;