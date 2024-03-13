const queryMiddleware = (req, res, next) => {
  if (req.query.page === undefined) {
    req.query.page = 1;
  }

  if (req.query.limit === undefined) {
    req.query.limit = 10;
  }

  if (req.query.order_by === undefined) {
    req.query.order_by = 'created_at';
  }

  if (req.query.order_dir === undefined) {
    req.query.order_dir = 'desc';
  }

  req.query.offset = (req.query.page - 1) * req.query.limit;

  next();
};

module.exports = queryMiddleware;