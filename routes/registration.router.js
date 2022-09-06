const express = require('express');
const {
  AllRegistration,
  findRegistrationById,
  createRegister,
} = require('../controllers/registration.controller');

const router = express.Router();

router.get('/', AllRegistration);
router.post('/', createRegister);
router.get('/:id', findRegistrationById);

module.exports = { registrationRouter: router };
