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

//MIDDLEWARE PARA RUTAS
app.use(express.json());
app.use('/api/user', routesUser);
app.use('/api/movie', routesMovie);
app.use('/api/order', routesOrder);   

app.listen(3000, () => console.log('Servidor levantado en 3000'));









