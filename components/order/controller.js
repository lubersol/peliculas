const Order = require('./model');
/*Crear pedido con fecha del alquiler y devolución al cabo de 7 días*/
module.exports.createOrder = async (req, res) => {
    const order = new Order(req.body);
    const returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + 7);
    order.returnDate = returnDate;
    await order.save();
    res.json(order);
};

const orders = Order.find({}).populate('userId');




