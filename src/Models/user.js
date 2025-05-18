const mongoose = require('mongoose');
const jwt = require("jsonwebtoken"); 
const bcrypt = require("bcrypt");
const JWT_SECRET = require('../Config/config');
const {Schema} = mongoose;

const userSchema = new Schema({
    firstName:{type:String, required:true, trim:true},
    lastName:{type:String,required:true, trim:true},
    emailId:{type:String, required:true, unique:true, lowercase:true, trim:true},
    password:{type:String, required:true, minLength: 8},
},
{ timestamps: true })


userSchema.methods.getjwt = async function ()
{
    const user=this;
    const token = await jwt.sign({_id:user._id},JWT_SECRET,{ expiresIn: '1h' });
    return token; 
}

module.exports = mongoose.model("User",userSchema);