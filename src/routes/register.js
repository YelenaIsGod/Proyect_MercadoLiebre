const express = require('express');
const register = require('../controllers/register');

const registerRouter = express.Router();

registerRouter.get('/', register);

module.exports = registerRouter;