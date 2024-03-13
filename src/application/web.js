const express = require('express');
const userRouter = require('../route/user.router');
const errorMiddleware = require('../middleware/error.middleware');
const queryMiddleware = require('../middleware/query.middleware');
const contactRouter = require('../route/contact.router');

const web = express();

web.use(express.json());
web.use(express.urlencoded({ extended: false }));

web.use(queryMiddleware);

web.use('/api', userRouter);
web.use('/api', contactRouter);

web.use(errorMiddleware);

module.exports = web;
