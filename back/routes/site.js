const express = require('express');
const router = express.Router();
const siteController = require('../controllers/site');

router.post('/', siteController.createSite);

module.exports = router;