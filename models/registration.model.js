const { db } = require('../utils/database.js');
const { DataTypes } = require('sequelize');

const Registration = db.define('registration', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  entranceTime: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  exitTime: {
    allowNull: true,
    type: DataTypes.DATE,
  },
  status: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'Working',
  },
});

module.exports = { Registration };
