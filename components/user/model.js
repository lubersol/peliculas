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

    
//const jwt = require('jsonwebtoken');
//const secret = 'srs654646546rsresresres';
// //const token = jwt.sign({ name: data.id, password: password }, secret, { expiresIn: 60 * 60 * 24 }); // expires in 24 hours
//     res.json({ token: token, message: 'Login correcto' });