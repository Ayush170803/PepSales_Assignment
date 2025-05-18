const mongoose = require('mongoose');
const {Schema} = mongoose;

const notificationSchema = new Schema({
    userId:{type:Schema.Types.ObjectId, required:true,ref:"User"},
    type:{type:String, required:true, enum:["email","sms","in-app"]},
    message:{type:String, required:true},
     read:{ type:Boolean, default: false}
},{ timestamps: true })

module.exports = mongoose.model("Notification", notificationSchema);