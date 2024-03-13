const sequelize = require('../application/database');
const { DataTypes } = require('sequelize');

const ContactModel = sequelize.define('contacts', {
  user_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
  },
  updated_at: {
    type: DataTypes.DATE
  }
}, { timestamps: false, underscored: true });

module.exports = ContactModel;