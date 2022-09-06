const express = require('express');
const { AllRegistration } = require('../controllers/registyration.controller');

const router = express.Router();

router.get('/', AllRegistration);

module.exports = { registrationRouter: router };
