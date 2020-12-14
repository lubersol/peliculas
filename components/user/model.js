const mongoose = require('mongoose');

// let uniqueValidator = require('mongoose-unique-validator');

const CONS = {
    ROLES: {
        ADMIN: 'ADMIN',
        USER: 'USER',
    }
}
//Schemas para usuarios
const UserSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'El nombre es necesario'] },
    email: { type: String, required:[true, 'El correo es necesario'],unique:true },
    password: { type: String, required:[true, 'el password es necesario'] },
    role: { type: String, default: 'USER', enum: Object.values(CONS.ROLES) }
});




module.exports = mongoose.model('User', UserSchema);
