const mongoose = require("mongoose");


const registerSchema = new mongoose.Schema({
firstname:{
type: String,
required : true



},
email:{

    type: String,
    required: true



},
phnumber:{
    type: String,
    required: true




},
password:{
type: String,
required: true


},
confirmpassword:{
    type: String,
    required: true




}






})

const Register = new mongoose.model("Register",registerSchema)


module.exports = Register;
