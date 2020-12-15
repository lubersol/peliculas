const User = require('./model');
const jwt = require('jsonwebtoken');
const secret = 'ksdjflsdjflsjflsdfjldsjf';
const bcrypt = require('bcryptjs');


//Crear usuario nuevo (el email no puede ser ficticio)
module.exports.createUser = async (req, res) => {
    
    const nuevoUsuario = { 
        name:req.body.name,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password, 9)
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
module.exports.login = async (req, res, next) => {
    try {
        const data = await User.findOne({ email: req.body.email });
        if (data) {
            const check = bcrypt.compareSync(req.body.password, data.password);
            if (check) {
                const token = jwt.sign({ email: data.id, password: data.password }, secret, { expiresIn: 60 * 60 * 24 });
                res.json({ token: token, message: 'Login correcto' });
                res.json({ success: token(data) });

            } else {
                res.json({ error: 'Datos introducidos incorrectamente' })
            }
        } else {
            res.json({ error: 'Los datos que ha introducido no son correctos' })
        }
    } catch (error) {
        console.log(error);
    }
    next();
    
};
    //Middleware para validar mediante token
module.exports.verif = jwt.verify(token, 'secret', function (err, token) {
    if (err) {
        return res.status(401).send({
            ok: false,
            message: 'Token inválido'
        });
    } else {
        req.token = token
    }
    
})




