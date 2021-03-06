const express = require('express');
const router = express.Router();

const { isLoggedIn, isNotLoggedIn } = require('../utils/passport/confirmLogin');
const deviceController = require('../controllers/device');

router.get('/', isLoggedIn, deviceController.getAllHasUser);
router.post('/', isLoggedIn, deviceController.createDevice);
router.post('/data', deviceController.getSensorData);
router.post('/:deviceId', isLoggedIn, deviceController.addDevice);

module.exports = router;