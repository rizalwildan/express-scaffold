const { Sequelize } = require('sequelize');
const { postgres } = require('../config/database.config');

const sequelize = new Sequelize(
  postgres.database,
  postgres.username,
  postgres.password, {
    host: postgres.host,
    port: postgres.port,
    dialect: postgres.dialect
  });

module.exports = sequelize;
