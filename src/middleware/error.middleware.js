const ResponseError = require('../error/response.error');
const errorMiddleware = (err, req, res, next) => {
  if (err instanceof ResponseError) {
    if (err.status === 422) {
      res.status(err.status).json({
        code: err.status,
        message: err.message,
        errors: err.data
      }).end();
    } else if (err.status === 404) {
      res.status(404).json({ code: 404, message: 'not found bro'}).end();
    } else {
      res.status(err.status).json({
        code: err.status,
        message: err.message
      }).end();
    }
  }

  return next();
};

module.exports = errorMiddleware;