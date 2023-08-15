const express = require('express');
const login = require('../controllers/login');

const loginRouter = express.Router();

loginRouter.get('/', login);

module.exports = loginRouter;