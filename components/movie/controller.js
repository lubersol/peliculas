const Movie = require('./model');

module.exports.getMovies = async (req, res) => {
    const data = await Movie.find({});
    res.json(data);
};

module.exports.getMovie = async (req, res) => {
    const data2 = await Movie.find({ _id: req.params.id });
    res.json(data2);
};

module.exports.createMovie = async (req, res) => {
    const movie = new Movie(req.body);
    await movie.save();
    res.json(movie);
};

module.exports.filterByGenre = async (req, res) => {
    const genre = await Movie.filter((elem) => {
        if (elem.genero === req.query.genero) return elem
    });
    res.json(genre);
};



