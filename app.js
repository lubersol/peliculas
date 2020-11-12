//PARA IMPORTAR E INVOCAR EL MODULO DE EXPRESS
const express = require('express');
const mongoose= require ('./config/mongoose');
const app = express();


//ROUTER
const routesUser = require('./components/user/router.js');
const routesMovie = require('./components/movie/router.js');
const routesOrder = require('./components/order/router.js');

//PUERTO
const PORT = process.env.PORT || 3000;

//CONEXION A LA BASE DE DATOS
// const mongoose = require('mongoose');
// const MongoURI = process.env.MongoURI || 'mongodb://localhost:27017/heroku-mongo'
// mongoose.connect(MongoURI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('connected to Mongodb: ' + MongoURI));
    //PARA VER SI ESTAMOS CONECTADOS A LA BD


//MIDDLEWARE PARA RUTAS
app.use(express.json());
app.use('/api/user', routesUser);
app.use('/api/movie', routesMovie);
app.use('/api/order', routesOrder);


app.listen(PORT, () => console.log('Servidor levantado en '+PORT));









