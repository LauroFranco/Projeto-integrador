const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

router.use(auth);

router.get('/', userController.index);

router.get('/parent', userController.parent);
router.post('/parent', userController.storeParent);
router.get('/driver', userController.driver);
router.post('/driver', userController.storeDriver);
router.get('/child', userController.child);
router.post('/child', userController.storeChild);

router.get('/edit/:id', userController.edit);
router.post('/edit/:id', userController.update);
router.get('/delete/:id', userController.delete);

router.post('/addDriver', userController.adicionaDriver);
router.post('/addSchool', userController.adicionaSchool);

router.get('/:id', userController.show);

module.exports = router;
