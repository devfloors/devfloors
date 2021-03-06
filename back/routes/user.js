const express = require('express');
const router = express.Router();

const { isLoggedIn, isNotLoggedIn } = require('../utils/passport/confirmLogin');
const userController = require('../controllers/user');

router.get('/', userController.getUser);
router.get('/session', userController.getSesssion);
router.post('/', isNotLoggedIn, userController.createUser);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

module.exports = router;