const router = require('express').Router();
const controller = require('./controller.js');

router.get('/', controller.getMovies);
router.get('/:id', controller.getMovie);
router.post('/', controller.createMovie);
router.get('/?', controller.filterByGenre);

module.exports = router;