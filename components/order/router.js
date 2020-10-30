const router = require('express').Router();
const controller = require('./controller.js');

router.post('/', controller.createOrder);

module.exports = router; 