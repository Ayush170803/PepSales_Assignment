const express = require("express");
const userRouter = express.Router();
const User = require('../Models/user');
const validateSignupData = require('../utils/validation');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { userauth } = require('../Middlewares/auth');
const Notification = require('../Models/notification');

userRouter.post('/signup', async (req,res)=>
{
    try
    {
        const {firstName,lastName,emailId,password} = req.body;
        validateSignupData(req);
        const passwordhash = await bcrypt.hash(password, saltRounds);
        const existinguser = await User.findOne({emailId:emailId});
        if(existinguser)
        {
            return res.status(409).json({message : "User already exists" });
        }
        const user = new User({firstName,lastName,emailId,password:passwordhash});
        const saveduser = await user.save();

        
      const token= await saveduser.getjwt();
      
      res.cookie("token",token,{expires: new Date(Date.now()+8*3600000)});


        res.json(
        {
          message:"data successfully saved on db",
            data: {
            firstName: saveduser.firstName,
            lastName: saveduser.lastName,
            emailId: saveduser.emailId,
            },
        });
    }
    catch(er)
    {
   res.status(400).json({ message: er.message });
    }
})

userRouter.post('/signin',async(req,res)=>
{
    try
    { 
    const {emailId,password} = req.body;
    // check whether the email id is present or not otherwise user is missing
    const user = await User.findOne({emailId:emailId});
          if(!user)
          {
            res.status(400).send("Invalid Credentials");
          }
        const validpwd = await bcrypt.compare(password,user.password);
      
        if(validpwd)
        {
             const token= await user.getjwt();
              res.cookie("token",token,{expires: new Date(Date.now()+8*3600000)});
              res.json({
                 message:"login Successful",
                        data: {
            firstName: user.firstName,
            lastName: user.lastName,
            emailId: user.emailId,
            },
               })
        }
    else
        {
          res.status(400).send("wrong password");
        }
      }
      catch(er)
      {
         res.status(400).json({message: er.message });
      }
})

userRouter.post('/signout', userauth, async (req, res) => {
    try
    {
        res.cookie("token","",{httpOnly: true, secure: true, sameSite: "strict", expires: new Date(Date.now())});
        res.status(200).json({ message: "User logged out successfully."});
    }
    catch(err)
    {
        res.status(500).json({error:"Logout failed. Please try again."});
    }
});

userRouter.get('/:id/notifications',userauth,async (req, res)=>
{
    try
    {
        const id = req.params.id;
        if(id.toString() != req.userdetails._id.toString())
        {
            return res.status(403).json(
                {
                    message:"Access denied."
                })
        }

        const notification = await Notification.find({userId:id}).sort({ createdAt: -1 });;
        res.status(200).json(
            {
                notification
            }
        )
    }
    catch(er)
    {
         res.status(400).json({message: er.message });
    }
})

module.exports = userRouter;