'use strict';

const express = require('express');
const router = express.Router();
const {exampleUserMethod} = require('../../../controllers/userController.js');

// Routes
router.get('/', exampleUserMethod);

module.exports = router;
