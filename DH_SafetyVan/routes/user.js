const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

router.get('/', userController.index);
router.get('/perfil', userController.show);

router.get('/parent', auth, userController.parent);
router.post('/parent', userController.storeParent);
router.get('/driver', auth, userController.driver);
router.post('/driver', userController.storeDriver);
router.get('/child', auth, userController.child);
router.post('/child', userController.storeChild);

module.exports = router;
