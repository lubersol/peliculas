const mongoose = require('mongoose');

const CONS = {
    ROLES:{
        ADMIN:'ADMIN',
        CLIENT:'CLIENT'
    }
 }

module.exports = mongoose.model('User', new mongoose.Schema({
    name: { type: String },
    password: { type: String },
    email: { type: String },
    role: { type: String, default: 'USER', enum: Object.values(CONS.ROLES) },
}));
