const router = require('express').Router();
const controller = require('./controller.js');

//Routers para peticiones CRUD
router.get('/', controller.getMovies);
router.get('/:id', controller.getMovie);
router.post('/', controller.createMovie);

module.exports = router;