const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

router.get('/', auth, userController.index);

router.get('/parent', auth, userController.parent);
router.post('/parent', userController.storeParent);
router.get('/driver', auth, userController.driver);
router.post('/driver', userController.storeDriver);
router.get('/child', auth, userController.child);
router.post('/child', userController.storeChild);

router.get('/edit/:id', auth, userController.edit);
router.post('/edit/:id', auth, userController.update);

router.post('/addDriver', auth, userController.adicionaDriver);

router.get('/:id', auth, userController.show);



module.exports = router;
