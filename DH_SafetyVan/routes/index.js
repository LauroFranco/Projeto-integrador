const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

/* GET home page. */
router.get('/', indexController.index);
router.get('/ajuda', indexController.ajuda);
router.get('/seguranca', indexController.seguranca);

router.get('/login', authController.index);
router.post('/login', authController.login);
router.get('/logout', authController.destroy);

router.get('/cadastro', userController.create);
router.post('/cadastro', userController.store);

router.get('/motoristas', indexController.ListaMotoristas);

module.exports = router;
