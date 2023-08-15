const express = require('express');
const index = require('../controllers/index');

const indexRouter = express.Router();

indexRouter.get('/', index);

module.exports = indexRouter;