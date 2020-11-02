const mongoose = require('mongoose');

const CONS = {
    ROLES: {
        ADMIN: 'ADMIN',
        USER: 'USER',
    }
}

module.exports = mongoose.model('User', new mongoose.Schema({
    name: { type: String },
    password: { type: String },
    email: { type: String },
    role: { type: String, default: 'USER', enum: Object.values(CONS.ROLES) }
},
    {//Este código es para que no devuelva la password cuando pedimos un usuario por id al servidor
        toJSON: {
            transform: function (doc, ret) {
                delete ret.password
                return ret;
            }
        }
    }));
