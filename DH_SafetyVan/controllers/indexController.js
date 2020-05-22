const indexController = {
    index: (_req, res) => {
        return res.render("index");
    },

    ajuda: (_req, res) => {
        return res.render("ajuda");
    },

    seguranca: (_req, res) => {
        return res.render("seguranca");
    }
};

module.exports = indexController;