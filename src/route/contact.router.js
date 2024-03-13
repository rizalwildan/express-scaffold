const express = require('express');
const contactController = require('../controller/contact.controller');
const { createContactValidation } = require('../validation/contact.validation');

const contactRouter = new express.Router();

contactRouter.post('/contacts', createContactValidation, contactController.create);

module.exports = contactRouter;