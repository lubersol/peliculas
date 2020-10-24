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

// app.post('/usuario', (req, res) => {
//     //metodo push
//     const usuarios = [];
//     const usuario = usuarios.push();
//     const user = req.body;
//     res.json(usuario + 'Se ha registrado correctamente');
// });
// app.post('/', (req, res) => {
//     console.log(req.body);
//     res.json({message:''});
// });

//Endpoint de perfil de usuario (Get)

// app.get('/', (req, res) => {
//     res.send('');
// });

//Endpoint de baja de usuario (Delete)

// app.delete('/', (req, res) => {
//     res.send('');
// });

//Endpoint de login de usuario (Update)

// app.update('/', (req, res) => {
//     res.send('');
// });

// app.post('/saludo', function (req, res) {

// 	var nombre = req.body.nombre || '';
// 	var saludo = '';

// 	if (nombre != '')
// 		saludo = "Hola " + nombre;

// 	res.send(''
// 			+ cabecera
// 			+ '
// ' + saludo + '

// '
// 			+ formulario
// 			+ ''
// 	);

// });


//PELICULAS

//Creamos array con objetos de peliculas

const peliculas = [
    { id: '1', titulo: 'Match point', director: 'Woody Allen', interpretes: 'Jonathan Rhys Meyers' },
    { id: '2', titulo: 'Orgullo y prejuicio', director: 'Joe Wright', interpretes: 'Keira Knightley, Mathew McFayden' },
    { id: '3', titulo: 'Blade runner', director: 'Ridley Scott', interpretes: 'Harrison Ford, Sean Young' },
    { id: '4', titulo: 'Infiltrados', director: 'Martin Scorsese', interpretes: 'Leonardo Di Caprio, Jack Nicholson' },
    { id: '5', titulo: 'Shame', director: 'Steve McQueen', interpretes: 'Michael Fassbender, Carey Mulligan' },
    { id: '6', titulo: 'Muerte entre las flores', director: 'Ethan Coen', interpretes: 'Gabriel Byrne, John Turturro' },
    { id: '7', titulo: 'Pulp fiction', director: 'Quentin Tarantino', interpretes: 'John Travolta, Uma Thurman' },
    { id: '8', titulo: 'Malditos bastardos', director: 'Quentin Tarantino', interpretes: 'Christoph Waltz, Brad Pitt' },
    { id: '9', titulo: 'Tal como eramos', director: 'Sydney Pollack', interpretes: 'Robert Redford, Barbra Streissand' },
    { id: '10', titulo: 'Melancolia', director: 'Lars Von Triers', interpretes: 'Kirsten Dunst, Aleksander Skaargard' },
    { id: '11', titulo: '2046', director: 'Won Kar-Wai', interpretes: 'Zhang Ziyi, Gong Li' },
    { id: '12', titulo: 'Canino', director: 'Yorgos Lanthimos', interpretes: 'Mary Tsoni, Angeliki Papoulia' }
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

//Buscar por actores
app.get('/actores', (req, res) => {
    let { p } = req.query;
    let pelis = peliculas.filter(film => film.interpretes.includes(p));
    res.json(pelis);
});
//PEDIDOS


//ENDPOINTS PARTE PEDIDOS

//El id nos llega por GET en la URL y los parametros por POST
app.post('/pedido/:order', (req, res) => {
    const pedido = [
        { order: '101', id: '1', titulo: 'Match point' },
        { order: '102', id: '2', titulo: 'Orgullo y prejuicio' },
        { order: '103', id: '3', titulo: 'Blade runner' },
        { order: '104', id: '4', titulo: 'Infiltrados' },
        { order: '105', id: '5', titulo: 'Shame' },
        { order: '106', id: '6', titulo: 'Muerte entre las flores' },
        { order: '107', id: '7', titulo: 'Pulp fiction' },
        { order: '108', id: '8', titulo: 'Malditos bastardos' },
        { order: '109', id: '9', titulo: 'Tal como eramos' },
        { order: '110', id: '10', titulo: 'Melancolia' },
        { order: '111', id: '11', titulo: '2046' },
        { order: '112', id: '12', titulo: 'Canino' }
    ];
    let fecha = new Date();
    let fechaDevolucion = fecha.setDate(fecha.getDate() + 7);
    let numeroOrden = req.params;
    let peliElegida = req.body;
    //Fecha de alquiler
    res.json(`Order ID: ${numeroOrden.order} Pelicula: ${peliElegida.titulo} Fecha de devolución: ${fecha}`);
});



