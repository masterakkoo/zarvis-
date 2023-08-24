const mongoose = require("mongoose")
const validator = require('validator');
const nuser = new mongoose.Schema({
    fname: String,
    lname: String,
    email: {
        type: String,

    },
    password: String,
    con_password: String,
    address:{
        type:String,
        default:""
    } ,
    state: String,
    city: String,
    mobile_no: String,
    alternate_no: String,
});

const User = new mongoose.model("User", nuser);

module.exports = User;