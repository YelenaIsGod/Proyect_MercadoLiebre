const express = require('express');
const {indexController, loginController, registerController} = require('../controllers/index');

const indexRouter = express.Router();
const loginRouter = express.Router();
const registerRouter = express.Router();

indexRouter.get('/', indexController);
loginRouter.get('/', loginController);
registerRouter.get('/', registerController);

module.exports = {
    indexRouter,
    loginRouter,
    registerRouter
};