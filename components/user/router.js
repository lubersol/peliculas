const router = require('express').Router();
const controller = require('./controller.js');

//Routers para hacer peticiones CRUD
router.post('/', controller.createUser);
router.get('/', controller.getUsers);
router.get('/:id', controller.getUser);
router.delete('/:id', controller.deleteUser);
router.post('/login', controller.login);

module.exports = router;

