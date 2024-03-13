const web = require('./application/web');
const logger = require('./application/logging');
const sequelize = require('./application/database');

sequelize.authenticate()
  .then(() => logger.info('Connection db success'))
  .catch((err) => logger.error('Connection db error', err));

web.listen(3000, () => {
  logger.info('App start');
});