//PARA IMPORTAR E INVOCAR EL MODULO DE EXPRESS
const express = require('express');
const app = express();


//ROUTER
const routesUser = require('./components/user/router.js');
const routesMovie = require('./components/movie/router.js');
const routesOrder = require('./components/order/router.js');


//CORS
const cors = require('cors');
app.use(cors());

// app.use(function (req, res, next) { //para evitar el error CORS
//     res.header("Access-Control-Allow-Origin", "*"); //permite hacer peticiones desde todos los orígenes
//     res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"); //permite peticiones con las cabeceras enumeradas
//     res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//     res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
//     next();
// });


//PUERTO
const PORT = process.env.PORT || 3000;


// Ruta por defecto con mensaje de bienvenida en formato JSON.
app.get('/', (req, res) => res.status(200).send({
    message: 'Bienvenido a nuestro videoclub',
}));


//MIDDLEWARE PARA RUTAS
app.use(express.json());
app.use('/api/user', routesUser);
app.use('/api/movie', routesMovie);
app.use('/api/order', routesOrder);


//IMPORTAR MONGOOSE Y CONEXION BBDD
const mongoose= require ('mongoose');
const MongoURI = 'mongodb+srv://lucia:eac9p1OWTiqifoyj@heroku-mongo-mi-atlas.xabhu.mongodb.net/heroku-mongo-atlas?retryWrites=true&w=majority' || 'mongodb://localhost:27017/heroku-mongo'
mongoose.connect(MongoURI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false })
    .then(() => console.log('connected to Mongodb: ' + MongoURI))
    .catch(e=>console.error('mongoose erroneo ', e))


//INICIAR SERVIDOR NODE
app.listen(PORT, () => console.log('Servidor levantado en '+PORT));


['unhandledRejection', 'uncaughtException'].forEach(event => process.on(event, (err) => {
    console.error(`unhandled error: ${err.stack || err}`);
}));






