const { Registration } = require('../models/registration.model');

const AllRegistration = async (req, res) => {
  try {
    const registration = await Registration.findAll();
    res.status(200).json({
      status: 'fue satisfactorio',
      registration,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { AllRegistration };
