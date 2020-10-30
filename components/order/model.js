const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    // userId: {type: mongoose.isValidObjectId},
    // movieId: {type: mongoose.isValidObjectId},
    createdAt:{type:Date, default: Date},
    returnDate: {type:Date}
});
//  new Order ({userId:'ldkjfldsjkff', })
//  const orders = Order.find({}).populate('userId');
module.exports= mongoose.model('Order', OrderSchema);
