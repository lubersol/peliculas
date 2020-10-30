//PARA IMPORTAR E INVOCAR EL MODULO DE EXPRESS
const express = require('express');
const app = express();
const router = express.Router();
//ROUTER
const routesUser = require('./components/user/router.js');
const routesMovie = require('./components/movie/router.js');
const routesOrder = require('./components/order/router.js');

//PUERTO
const PORT = 3000;

//CONEXION A LA BASE DE DATOS
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db-peliculas', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    //PARA VER SI ESTAMOS CONECTADOS A LA BD
    .then(() => console.log('Mongoose connected'))
    .catch((error) => console.log('Error Mongoose connection', error));

//MIDDLEWARE
app.use(express.json());
app.use('/api/user', routesUser);
app.use('/api/movie', routesMovie);
app.use('/api/order', routesOrder);

// //Middleware para tratar peticiones entrantes a modo de log 
// app.use((req, res, next) => {
//     console.log('He recibido la peticion');
//     next();
// });

// //MIDDLEWARE CREADO POR MI 

// const middleware2 = (req, res, next) => {
//     console.log('Ha pasado por aqui ');
//     next();
// }

//INSTANCIAMOS EL SERVIDOR
app.listen(3000, () => console.log('Servidor levantado en 3000'));



// app.post('/user/login', (req, res) => {
//     //Validamos que los datos son correctos
//     const { name, password } = req.body;

//     if (!name || !password) return res.json({ error: 'Fallo al introducir los datos' });

//     const data = usuarios.filter(e => e.usuario === usuario && e.password === password);

//     if (!data) return res.json({ error: 'Los datos introducidos no son correctos' });

//     const token = jwt.sign({ name: data.id, password: password }, secret, { expiresIn: 60 * 60 * 24 }); // expires in 24 hours
//     res.json({ token: token, message: 'Login correcto' });
// });

//Endpoint de baja de usuario (Delete) (http://localhost:3000/usuarios/5)Poner un while o do while.ARREGLAR
// app.delete('/users/:userId', async (req, res) => {
//     const id = req.params;
//     const userId = await User.findOne(
//         { _id: req.params._id }
//     );
//     res.json(userId);
// });


//PELICULAS
//DEFINIR SCHEMA PARA PELICULAS




//para guardar todas las peliculas en la base de datos

// for (let i = 0; i < peliculas.length; i++) {
//     const movie = new Movie(peliculas[i]);
//     await movie.save();
// }
//}

//script().then();





// app.get('/movie', async (req, res) => {
//     const query = {};
//     if (req.query.titulo) query.titulo = req.query.titulo;
//     if (req.query.director) query.director = req.query.director;
//     if (req.query.interpretes) query.interpretes = req.query.interpretes;
//     if (req.query.genero) query.genero = req.query.genero;
//     console.log(query);
//     const data = await Movie.find(query);
//     res.json(data)
// });


//Endpoint para la ruta de pelicula (id) http://localhost:3000/movie/10)
// app.get('/movie/:id', async (req, res) => {
//     const id = req.params;
//     const movieId = await Movie.findOne(
//         { _id: req.params._id }
//     );
//     res.json(movieId);
// });


// app.post('/movie', async (req, res) => {
//     const movie = new Movie(req.body);
//     await movie.save();
//     res.json(movie);
// });

// app.patch('/movie', async (req, res) => {
//     const movie = await Movie.findOne({ _id: req.body._id })
//     if (!movie) return res.json({ error: 'Elemento no encontrado' });
//     movie.titulo = 'Match point';
//     await movie.save();
//     res.json(movie);
// })

//PEDIDOS


//El id nos llega por GET en la URL y los parametros por POST
// app.post('/order', (req, res) => {
//     if (!getUserById(req.body.idUsuario)) {
//         res.status(400);
//         return res.json({ error: 'El usuario no existe' })
//     }
//     const fechaEntrega = new Date();
//     fechaEntrega.setDay(fechaEntrega.getDay() + 7);
//     const order = {
//         idPedido: getRandom(1, 1000),
//         idUsuario: req.body.idUsuario,
//         idPelicula: req.body.idPelicula,
//         fechaPedido: new Date(),
//         fechaEntrega: fechaEntrega,
//     }
//     orders.push(order)
//     res.json(order);
// });








