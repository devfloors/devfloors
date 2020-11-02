const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/device');

router.post('/', deviceController.createDevice);

module.exports = router;