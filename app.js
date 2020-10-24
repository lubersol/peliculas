//PARA IMPORTAR E INVOCAR EL MODULO DE EXPRESS
const express = require('express');
const app = express();

const PORT = 3000;
//MIDDLEWARE
app.use(express.json());

//INSTANCIAMOS EL SERVIDOR
app.listen(3000, () => console.log('Servidor levantado en 3000'));


//USUARIOS


//ENDPOINTS PARTE USUARIO 
//generar mensaje que diga que ha accedido correctamente y mensaje que diga que es incorrecto en la response.
//crear const usuarios = nombre password e id? rol?

//Endpoint de alta de usuario (Post)
const usuarios = [];
const usuario = usuarios.push();
app.post('/', (req, res) => {
    //metodo push
    res.send('');
});

//Endpoint de perfil de usuario (Get)


//Endpoint de baja de usuario (Delete)


//Endpoint de login de usuario (Update)



//PELICULAS

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
    res.send('Bienvenido a nuestro videoclub THE MOVIE DB');
});

//ENDPOINTS PARTE PELICULAS

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


//PEDIDOS


//ENDPOINTS PARTE PEDIDOS

//El id nos llega por GET en la URL y los parametros por POST
app.post('/request/order/:id', (req, res) => {
    const pedido = [
        { order: '101', id: '1', titulo: 'Match point' },
        { order: '102', id: '2', titulo: 'Orgullo y prejuicio', director: 'Joe Wright', interprete: 'Keira Knightley' },
        { order: '103', id: '3', titulo: 'Blade runner', director: 'Ridley Scott', interprete: 'Harrison Ford' },
        { order: '104', id: '4', titulo: 'Infiltrados', director: 'Martin Scorsese', interprete: 'Leonardo Di Caprio' },
        { order: '105', id: '5', titulo: 'Shame', director: 'Steve McQueen', interprete: 'Michael Fassbender' },
        { order: '106', id: '6', titulo: 'Muerte entre las flores', director: 'Ethan Coen', interprete: 'Gabriel Byrne' },
        { order: '107', id: '7', titulo: 'Pulp fiction', director: 'Quentin Tarantino', interprete: 'John Travolta' },
        { order: '108', id: '8', titulo: 'Malditos bastardos', director: 'Quentin Tarantino', interprete: 'Christoph Waltz' },
        { order: '109', id: '9', titulo: 'Tal como eramos', director: 'Sydney Pollack', interprete: 'Robert Redford' },
        { order: '110', id: '10', titulo: 'Melancolia', director: 'Lars Von Triers', interprete: 'Kirsten Dunst' },
        { order: '111', id: '11', titulo: '2046', director: 'Won Kar-Wai', interprete: 'Zhang Ziyi' },
        { order: '112', id: '12', titulo: 'Canino', director: 'Yorgos Lanthimos', interprete: 'Mary Tsoni' }
    ];
    //Fecha de alquiler
    const fecha = new Date();
    const fechaDevolucion = setDay(fecha.getDay()+7);
    res.send('Order ID: ' + req.params.order + 'Pelicula: ' + req.body.pelicula + fecha + 'Tienes que devolver la película: ' + fechaDevolucion);
});



