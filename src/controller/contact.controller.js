const { validationResult, matchedData } = require('express-validator');
const ResponseError = require('../error/response.error');
const contactService = require('../services/contact.service');

const create = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new ResponseError(422, 'validation error', errors.array());
    }

    const contacts = matchedData(req);

    await contactService.create(contacts);

    res.status(201).json({ code: 201, message: 'created' });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  create
};