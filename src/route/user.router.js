const express = require('express');
const userController = require('../controller/user.controller');
const { createUserValidation, updateUserValidation } = require('../validation/user.validation');
const queryValidation = require('../validation/query.validation');

const userRouter = new express.Router();

userRouter.get('/users', queryValidation, userController.get);
userRouter.get('/users/:userId', userController.detail);
userRouter.post('/users', createUserValidation, userController.create);
userRouter.put('/users/:userId', updateUserValidation, userController.update);

module.exports = userRouter;