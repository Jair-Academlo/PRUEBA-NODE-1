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

const createRegister = async (req, res) => {
  try {
    const { entranceTime } = req.body;
    const newRegister = await Registration.create({ entranceTime });

    res.status(201).json({
      message: 'registro creado',
      status: 'fue satisfactorio',
      newRegister,
    });
  } catch (error) {
    console.log(error);
  }
};

const findRegistrationById = async (req, res) => {
  try {
    const { id } = req.params;
    const registrationId = await Registration.findOne({ where: { id } });

    if (!registrationId) {
      return res.status(404).json({
        message: 'id no fue encontrado',
        status: 'failed',
      });
    } else {
      res.status(200).json({
        message: 'Id fue encontrado',
        status: 'fue satisfactorio',
        registrationId,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const exitRegister = async (req, res) => {
  try {
    const { id } = req.params;
    const exitId = await Registration.findOne({ where: { id } });
    const { exitTime } = req.body;

    if (!exitId) {
      return res.status(404).json({
        message: 'Id no se pudo actualizar',
        status: 'failed',
      });
    } else {
      res.status(200).json({
        message: 'operacion exitosa',
        status: 'fue satisfactorio',
        exitId,
      });
    }

    await exitId.update({ exitTime, status: 'out' });
  } catch (error) {
    console.log(error);
  }
};

const cancelledRegister = async (req, res) => {
  try {
    const { id } = req.params;
    const cancelledId = await Registration.findOne({ where: { id } });

    if (!cancelledId) {
      return res.status(404).json({
        message: 'el Id no fue encontrado',
        status: 'failed',
      });
    } else {
      res.status(200).json({
        message: 'el Id fue cancelado',
        status: 'fue exitoso',
        cancelledId,
      });
    }

    await cancelledId.update({ status: 'cancelled' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  AllRegistration,
  findRegistrationById,
  createRegister,
  exitRegister,
  cancelledRegister,
};
