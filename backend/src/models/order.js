const mongoose = require("mongoose");
const items = new mongoose.Schema({
    email: String,
    name:String,
    model_id: String,
    model_name: String,
    price: Number,
    image: String,
    Date:String,
    time:String
})

const Order = new mongoose.model("Order", items);

module.exports = Order;