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
    password: { type: String, required:[true, 'el password es necesario'] },
    email: { type: String, required:[true, 'El correo es necesario'],unique:true },
    role: { type: String, default: 'USER', enum: Object.values(CONS.ROLES) }
});



// //Middleware para encriptar la contraseña antes de guardar usuario
//  UserSchema.pre('save', async function (next) {
//      try {
//          const user = this;
//          let password = user.password;
//          console.log(password);
//          const salt = await bcrypt.genSalt(9);
//          console.log(salt);
//          password = await bcrypt.hash(password, salt);
//          console.log(password);
//          next();
//      } catch (error) {
//          console.log(error);
//      }
//  });

// //Plugin de validación única
// UserSchema.plugin(uniqueValidator, {
//     message: '{PATH} debe de ser único'
// })

module.exports = mongoose.model('User', UserSchema);
