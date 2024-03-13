const { query } = require('express-validator');

const queryValidation = [
  query('page').isInt({ gt: 0 }).withMessage('page should be number'),
  query('limit').isInt({ gt: 0 }).withMessage('limit should be number'),
  query('order_by')
    .isString().withMessage('order_by must be string')
    .isIn(['created_at']).withMessage('order_by not in whitelist'),
  query('order_dir')
    .isString().withMessage('order_dir must be string')
    .isIn(['asc', 'desc']).withMessage('order_dir not in whitelist')
];

module.exports = queryValidation;