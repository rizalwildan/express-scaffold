const { body } = require('express-validator');

const createUserValidation = [
  body('name')
    .notEmpty().withMessage('name cannot be empty')
    .isString().withMessage('name must be string'),
  body('email')
    .notEmpty().withMessage('email cannot be empty')
    .isString().withMessage('email cannot be empty'),
  body('username')
    .notEmpty().withMessage('username cannot be empty')
    .isString().withMessage('username cannot be empty'),
  body('password')
    .notEmpty().withMessage('password cannot be empty')
    .isStrongPassword({
      minLength: 8,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
    }).withMessage('password must at lest 8 char 1 uppercase 1 number 1 symbol')
    .isString().withMessage('password cannot be empty')
];

const updateUserValidation = [
  body('name')
    .notEmpty().withMessage('name cannot be empty')
    .isString().withMessage('name must be string'),
  body('email')
    .notEmpty().withMessage('email cannot be empty')
    .isString().withMessage('email must be string'),
  body('password')
    .optional()
    .isStrongPassword({
      minLength: 8,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
    }).withMessage('password must at least 8 cahr 1 uppercase 1 number 1 symbol')
];

module.exports = {
  createUserValidation,
  updateUserValidation
};