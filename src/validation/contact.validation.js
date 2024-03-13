const { body } = require('express-validator');

const createContactValidation = [
  body('user_id')
    .notEmpty().withMessage('user_id cannot be empty')
    .isString().withMessage('user_id must be string')
    .isLength({ max: 100 }).withMessage('user_id max length 100'),
  body('phone_number')
    .notEmpty().withMessage('phone_number cannot be empty')
    .isNumeric().withMessage('phone_number must be numeric')
    .isLength({ min: 10, max: 13 }).withMessage('phone_number min 10 and max 13')
];

module.exports = {
  createContactValidation
};