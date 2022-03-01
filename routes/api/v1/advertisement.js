'use strict';

const express = require('express');
const router = express.Router();
const {exampleAdvertisementMethod} = require('../../../controllers/advertisementController.js');

// Routes
router.get('/', exampleAdvertisementMethod);

module.exports = router;
