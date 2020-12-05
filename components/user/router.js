const router = require('express').Router();
const controller = require('./controller.js');

//import { createUser, getUser, deleteUser, login } from './controller.js';


//Routers para hacer peticiones CRUD
router.post('/', controller.createUser);
router.get('/:id', controller.getUser);
router.delete('/:id', controller.deleteUser);
router.post('/login', controller.login);


module.exports = router;

