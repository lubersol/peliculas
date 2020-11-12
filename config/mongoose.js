const mongoose = require('mongoose');
const MongoURI = process.env.MongoURI || 'mongodb://localhost:27017/heroku-mongo'
mongoose.connect(MongoURI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to Mongodb: ' + MongoURI))
    .catch(e=>console.error('mongoose erroneo', e))


