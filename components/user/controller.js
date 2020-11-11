const User = require('./model');
const jwt = require('jsonwebtoken');
const secret = 'ksdjflsdjflsjflsdfjldsjf';
const bcrypt = require('bcrypt');

//Crear usuario nuevo (el email no puede ser ficticio)
module.exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
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
module.exports.getUser = async (req, res) => {
    try {
        const data = await User.findById({ _id: req.params.id });
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al acceder al usuario'
        });
    }
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
module.exports.login = async (req, res) => {

    const { email, password } = req.body;
    if (!email || !password) return res.json({ error: 'Fallo al introducir los datos' });

    const data = User.find(e => e.email === email && e.password === password);
    if (!data) return res.json({ error: 'Los datos introducidos no son correctos' });
    
    const token = jwt.sign({ email: data.id, password: password }, secret, { expiresIn: 60 * 60 * 24 });
    res.json({ token: token, message: 'Login correcto' });

    //Middleware para validar mediante token)
    jwt.verify(token, 'secret', function (err, token) {
        if (err) {
            return res.status(401).send({
                ok: false,
                message: 'Token inválido'
            });
        } else {
            req.token = token
            next()
        }
    })
}
        

       


       