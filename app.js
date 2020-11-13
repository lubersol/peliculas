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

// Ruta por defecto con mensaje de bienvenida en formato JSON.
app.get('*', (req, res) => res.status(200).send({
    message: 'Bienvenido a nuestro videoclub',
}));

//MIDDLEWARE PARA RUTAS
app.use(express.json());
app.use('/api/user', routesUser);
app.use('/api/movie', routesMovie);
app.use('/api/order', routesOrder);


app.listen(PORT, () => console.log('Servidor levantado en '+PORT));


['unhandledRejection', 'uncaughtException'].forEach(event => process.on(event, (err) => {
    console.error(`unhandled error: ${err.stack || err}`);
}));






