//PARA IMPORTAR E INVOCAR EL MODULO DE EXPRESS
const express = require('express');
const app = express();

const PORT = 3000;
//MIDDLEWARE
app.use(express.json());

//INSTANCIAMOS EL SERVIDOR
app.listen(3000, () => console.log('Servidor levantado en 3000'));

//Creamos array con objetos de peliculas

const peliculas = [
    { id: '1', titulo: 'Match point', director: 'Woody Allen', interprete: 'Jonathan Rhys Meyers' },
    { id: '2', titulo: 'Orgullo y prejuicio', director: 'Joe Wright', interprete: 'Keira Knightley' },
    { id: '3', titulo: 'Blade runner', director: 'Ridley Scott', interprete: 'Harrison Ford' },
    { id: '4', titulo: 'Infiltrados', director: 'Martin Scorsese', interprete: 'Leonardo Di Caprio' },
    { id: '5', titulo: 'Shame', director: 'Steve McQueen', interprete: 'Michael Fassbender' },
    { id: '6', titulo: 'Muerte entre las flores', director: 'Ethan Coen', interprete: 'Gabriel Byrne' },
    { id: '7', titulo: 'Pulp fiction', director: 'Quentin Tarantino', interprete: 'John Travolta' },
    { id: '8', titulo: 'Malditos bastardos', director: 'Quentin Tarantino', interprete: 'Christoph Waltz' },
    { id: '9', titulo: 'Tal como eramos', director: 'Sydney Pollack', interprete: 'Robert Redford' },
    { id: '10', titulo: 'Melancolia', director: 'Lars Von Triers', interprete: 'Kirsten Dunst' },
    { id: '11', titulo: '2046', director: 'Won Kar-Wai', interprete: 'Zhang Ziyi' },
    { id: '12', titulo: 'Canino', director: 'Yorgos Lanthimos', interprete: 'Mary Tsoni' }
]

//HTTP://LOCALHOST:3000/ (escribimos eso en el la barra del navegador)
app.get('/', (req, res) => {
    res.send('Hello world');
});

//Endpoint para la ruta peliculas (todas)
app.get('/peliculas', (req, res) => {
    res.json(peliculas);
});

//Endpoint para la ruta de pelicula (id)
app.get('/pelicula/:id', (req, res) => {
    let { id } = req.params;
    let pelicula = peliculas.find(pelicula => pelicula.id === id);
    res.json(pelicula);
});

//Endpoint para la ruta de queries
app.get('/pelicula', (req, res) => {
    let { q } = req.query;
    let peliculaLista = peliculas.filter(item => item.titulo.includes(q));
    res.json(peliculaLista);
});





