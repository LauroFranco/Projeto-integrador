const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');


router.get('/', authController.index);
router.post('/', authController.login);
router.get('/logout' ,authController.destroy);

module.exports = router;