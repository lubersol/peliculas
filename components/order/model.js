const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    userId: {type: mongoose.ObjectId},
    movieId: {type: mongoose.ObjectId},
    createdAt:{type:Date, default: Date},
    returnDate: {type:Date}
});
  
module.exports= mongoose.model('Order', OrderSchema);
