const User = require('./model');
const jwt = require('jsonwebtoken');
const router = require('./router');
const secret = 'ksdjflsdjflsjflsdfjldsjf';

//Middleware para tratar peticiones entrantes a modo de log (validacion del token)
router.use('/secure', (req, res, next)=>{
const token = req.headers['authorization']
if(!token){
    res.status(401).send({
        ok:false,
        message:'Token inválido'
    });
}
token=token.replace('Bearer ','')

jwt.verify(token, 'password',(err, token)=>{
    if(err) {
        return res.status(401).send({
            ok:false,
            message:'Token inválido'
        });
    }else{
        req.token=token
        next()
    }
});
});

//Crear usuario nuevo
module.exports.createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(user);
};

//Perfil de usuario
module.exports.getUser = async (req, res) => {
    const data = await User.find({ _id: req.params.id });
    res.json(data);
};

//Baja de usuario
module.exports.deleteUser = async (req, res) => {
    const userDelete = await User.deleteOne({ _id: req.params.id });
    res.json(userDelete);
};

//Login de usuario
module.exports.login = async (req, res) => {
    const { name, password } = req.body;
    if (!name || !password) return res.json({ error: 'Fallo al introducir los datos' });
    const data = User.find(e => e.name === name && e.password === password);
    if (!data) return res.json({ error: 'Los datos introducidos no son correctos' });
    const token = jwt.sign({ name: data.id, password: password }, secret, { expiresIn: 60 * 60 * 24 });
    res.json({ token: token, message: 'Login correcto' });
};

