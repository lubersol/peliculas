const User = require('./model');
let jwt = require('jsonwebtoken');
let secret = 'ksdjflsdjflsjflsdfjldsjf';
const bcrypt = require('bcryptjs');


//Crear usuario nuevo (el email no puede ser ficticio)
module.exports.createUser = async (req, res) => {

    const nuevoUsuario = {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 9)
    };

    try {
        const user = new User(nuevoUsuario);
        console.log(user);
        await user.save();
        console.log(nuevoUsuario);
        res.json({
            user,
            message: 'Usuario creado correctamente'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al registrarse'
        });
    }
};

//Perfil de usuario
module.exports.getUser = async (userId) => {
    return await User.findOne({ _id: userId });
}
let getUserData = async (req, res) => {
    let query = {};
    let users = null;
    if (!!req.body.email) query.email = req.body.email;
    if (query.email !== undefined) {
        users = await User.findOne(query);
    }
    return users;
};
//Baja de usuario
module.exports.deleteUser = async (req, res) => {
    try {
        const userDelete = await User.deleteOne({ _id: req.params.id });
        res.json(userDelete);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al eliminar usuario'
        });

    }
};

//Login de usuario + generar token
module.exports.login = async (req, res, next) => {
    try {
        const password = req.body.password;
        const data = await getUserData(req, res);
        if (data && data.password === password) {
            const token = jwt.sign({ email: data.id, password: data.password }, secret, { expiresIn: 60 * 60 * 24 });
            res.json({ token: token, message: 'Login correcto' });
            res.json({ success: token(data) });
            result = true;
        } else {
            res.json({ error: 'Datos introducidos incorrectamente' })
        }

    } catch {
        res.status(400).json({ message: 'error' })
    }
    next();

};
//Middleware para validar mediante token
module.exports.verif = (token) => {
    try {
        return jwt.verify(token, secret);
    } catch (e) {
        return null;
    }
};




