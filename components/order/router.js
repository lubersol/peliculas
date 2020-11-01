const router = require('express').Router();
const controller = require('./controller.js');
//Router para crear pedido
router.post('/', controller.createOrder);

module.exports = router; 