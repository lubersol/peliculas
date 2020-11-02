const mongoose = require('mongoose');

//Schemas de las películas
const MovieSchema = new mongoose.Schema({
    titulo: { type: String },
    director: { type: String },
    interpretes: { type: String },
    genero: { type: String }
});
module.exports = mongoose.model('Movie', MovieSchema);
