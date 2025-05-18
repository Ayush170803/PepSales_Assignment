const express = require('express');
const mainRouter = express.Router();

const userRouter = require('./user');
const notificationRouter = require('./notification');

mainRouter.use('/user',userRouter);
mainRouter.use('/notification',notificationRouter);
module.exports = mainRouter;