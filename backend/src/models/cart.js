const mongoose = require("mongoose");
const items = new mongoose.Schema({
    email: String,
    category: String,
    company: String,
    model_name: String,
    discount: Number,
    discription: String,
    availibilty: Boolean,
    options: [{
        varient: String,
        price: Number
    }],
    svarient: String,
    sprice: Number,
    images: [String],
    id: String
})

const CItem = new mongoose.model("CItem", items);

module.exports = CItem;