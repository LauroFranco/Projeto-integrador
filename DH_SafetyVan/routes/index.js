const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');
const upload = require("../config/uploads");

/* GET home page. */
router.get('/', indexController.index);
router.get('/ajuda', indexController.ajuda);
router.get('/seguranca', indexController.seguranca);

router.get('/login', authController.index);
router.post('/login', authController.login);
router.get('/logout',auth, authController.destroy);

router.get('/cadastro', userController.create);
router.post('/cadastro', userController.store);

router.get('/change',auth, userController.changeInfos);

router.post('/editar/carro' ,auth ,userController.editarCarro);
router.post('/editar/sobre' ,auth,userController.editarSobre);
router.post('/editar/email' ,auth ,userController.editarEmail);
router.post('/editar/telefone' ,auth,userController.editarTelefone);
router.post('/editar/avatar',auth , upload.any(),userController.postarfoto );
router.post('/editar/adicionaisVan',auth ,userController.adicionaisVan );

router.get('/search/:type', auth, userController.search);

router.get('/motoristas', auth, indexController.ListaMotoristas);

module.exports = router;
