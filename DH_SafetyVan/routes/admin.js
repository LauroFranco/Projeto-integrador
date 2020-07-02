const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');
const auth = require('../middlewares/auth');

router.get('/', auth, adminController.index);

router.get('/users', auth, adminController.showAllUsers);
router.get('/schools', auth, adminController.showAllSchools);

router.get('/school', auth, adminController.school);
router.post('/school', adminController.storeSchool);

module.exports = router;