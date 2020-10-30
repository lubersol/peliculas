const User = require('./model');
const jwt = require('jsonwebtoken');
const secret = 'ksdjflsdjflsjflsdfjldsjf';

//Middleware para tratar peticiones entrantes a modo de log 
// app.use((req, res, next) => {
//     console.log('He recibido la peticion');
//     next();
// });

module.exports.createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(user);
};

module.exports.getUsers = async (req, res) => {
    const data = await User.find({});
    res.json(data);
};

module.exports.getUser = async (req, res) => {
    const data2 = await User.find({ _id: req.params.id });
    res.json(data2);
};


module.exports.deleteUser = async (req, res) => {
    const userDelete = await User.remove({ _id: req.params.id });
    //método o función para eliminar el usuario
    res.json(userDelete);
};

module.exports.login = async (req, res) => {
    const { name, password } = req.body;
    if (!name || !password) return res.json({ error: 'Fallo al introducir los datos' });
    const data = User.find(e => e.name === name && e.password === password);
    if (!data) return res.json({ error: 'Los datos introducidos no son correctos' });
    const token = jwt.sign({ name: data.id, password: password }, secret, { expiresIn: 60 * 60 * 24 });
    res.json({ token: token, message: 'Login correcto' });
};

