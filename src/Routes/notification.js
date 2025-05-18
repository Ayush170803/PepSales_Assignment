const express = require('express');

const notificationRouter = express.Router();
const Notification = require('../Models/notification');
const {userauth} = require('../Middlewares/auth');

notificationRouter.post('/send',userauth,async(req,res)=>
{
    try{
        const {type,message} = req.body;
        if(!type || !message)
        {
            return res.status(400).send('Missing fields');
        }
        const notification = new Notification({userId:req.userdetails._id, type, message});
        const savedNotification = await notification.save();
        
         res.status(201).json(
        {
            success: true,
            message:"Notification Sent Successfully",
            notification
        }
        );
    }
    catch(er)
    {
        res.status(500).json(
        {
            error:er.message
        }
        );
    }
})


module.exports = notificationRouter;