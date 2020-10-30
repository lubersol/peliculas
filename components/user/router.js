const router = require('express').Router();
const controller = require('./controller.js');
//router.get('/me', checkJWT, service.XXX);???

router.post('/', controller.createUser);
router.get('/', controller.getUsers);
router.get('/:id', controller.getUser);
router.delete('/', controller.deleteUser);

module.exports = router;

