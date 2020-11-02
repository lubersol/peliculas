const User = require('./model');
const jwt = require('jsonwebtoken');
const router = require('./router');
const secret = 'ksdjflsdjflsjflsdfjldsjf';


//Crear usuario nuevo
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
            message: 'Error al acceder al usuario',
            error
        });
    }
};

//Baja de usuario
module.exports.deleteUser = async (req, res) => {
    const userDelete = await User.deleteOne({ _id: req.params.id });
    res.json(userDelete);
};

//Login de usuario + generar token
module.exports.login = async (req, res) => {
    const { name, password } = req.body;
    if (!name || !password) return res.json({ error: 'Fallo al introducir los datos' });
    const data = User.find(e => e.name === name && e.password === password);
    if (!data) return res.json({ error: 'Los datos introducidos no son correctos' });
    const token = jwt.sign({ name: data.id, password: password }, secret, { expiresIn: 60 * 60 * 24 });
    res.json({ token: token, message: 'Login correcto' });
};

//Middleware para tratar peticiones entrantes a modo de log (validacion del token)

    //inicializamos el middleware
    // router.use('/secure', function(req, res, next) {
    //     //obtenemos el token del header authorization
    // const token = req.headers['authorization']
    //     //si el token es nulo, devolvemos 401:cliente no tiene privilegios
    // if(!token){
    //     res.status(401).send({
    //         ok:false,
    //         message:'Token inválido'
    //     });
    // }
    //     //token generado por JWT: palabra Bearer
    // token = token.replace('Bearer ','')
    //     //validación con método verify + callback cuando el token sea validado
    // jwt.verify(token, 'password',(err, token)=>{
    //     if(err) {
    //         return res.status(401).send({
    //             ok:false,
    //             message:'Token inválido'
    //         });
    //     }else{
    //         req.token=token
    //         next()
    //     }
    // });
    // });


