const userService = require('../services/user.service');
const { validationResult, matchedData } = require('express-validator');
const ResponseError = require('../error/response.error');
const bcrypt = require('bcrypt');

const get = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new ResponseError(422, 'validation error', errors.array());
    }

    const users = await userService.findAll(req.query);

    res.json({ code: 200, message: 'success', data: users });
  } catch (e) {
    next(e);
  }
};

const detail = async (req, res, next) => {
  try {
    const user = await userService.detail(req.params.userId);

    res.json({ code: 200, message: 'success', data: user });
  } catch (e) {
    next(e);
  }
};

const create = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new ResponseError(422, 'validation error', errors.array());
    }

    const user = matchedData(req);
    user.password = await bcrypt.hash(user.password, 12);

    await userService.create(user);

    res.status(201).json({ code: 201, message: 'created' });
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new ResponseError(422, 'validation error', errors.array());
    }

    const data = matchedData(req);

    await userService.update(req.params.userId, data);

    res.status(200).json({ code: 200, message: 'success' });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  get,
  create,
  detail,
  update
};