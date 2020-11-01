const Movie = require('./model');

module.exports.getMovies = async (req, res) => {
    const query ={};
    if(req.query.genero) query.genero=req.query.genero;
    if(req.query.titulo) query.titulo=req.query.titulo;
    if(req.query.director) query.director=req.query.director;
    if(req.query.interpretes) query.interpretes=req.query.interpretes;
    const search = await Movie.find(query);
    res.json(search);
};

module.exports.getMovie = async (req, res) => {
    const byId = await Movie.find({ _id: req.params.id });
    res.json(byId);
};

module.exports.createMovie = async (req, res) => {
    const movie = new Movie(req.body);
    await movie.save();
    res.json(movie);
};





