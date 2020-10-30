const Model = require('./model');

module.exports.createUser = async (req, res) => {
    const user = new Model (req.body);
    await user.save();
    res.json(user);
};

module.exports.getUsers = async (req, res) => {
    const data = await Model.find({});
    res.json(data);
};

module.exports.getUser = async (req, res) => {
    const data2 = await Model.find({_id:req.params.id});
    res.json(data2);
};


module.exports.deleteUser = async (req, res) => {
    const userDelete = await Model.deleteOne({_id:req.params.id})
    res.json(userDelete);
};

