const express = require('express');
const {
  AllRegistration,
  findRegistrationById,
  createRegister,
  exitRegister,
  cancelledRegister,
} = require('../controllers/registration.controller');

const router = express.Router();

router.get('/', AllRegistration);
router.post('/', createRegister);
router.get('/:id', findRegistrationById);
router.patch('/:id', exitRegister);
router.delete('/:id', cancelledRegister);

module.exports = { registrationRouter: router };
