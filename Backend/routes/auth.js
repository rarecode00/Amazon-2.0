const express = require('express');
const { findOne, create } = require('../models/User');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const JWT_SECRET = "thisissecret"
const fetchuser = require('../middleware/fetchuser')

// Routes 1 : To create the User..

router.post('/createuser' , async(req , res) =>{
    const {name , email , password} = req.body;

    try{
        // If user already Exists....
        let user = await User.findOne({email})
        if(user){
            return res.status(400).json({success: false , message: "This email is already Exists"})
        }

        let salt = await bcrypt.genSalt(10);
        let secPass = await bcrypt.hash(password , salt);
        user = await User.create({
            name: name,
            email: email,
            password: secPass
        })
        const data = {
            user: user.id
        }
        const authToken = jwt.sign(data,JWT_SECRET);
       return  res.json({success: true , authToken,  message: "User Created Successfully"})

    }catch(error){
        console.log(error);
        return res.status(500).json({success: false , message:'Internal Server Error'});
    }
})

// -------------------------------------------End OF Router 1-------------------------------------------------

// Router 2: To login the user with credentials.

router.post('/login' , async (req , res) =>{
    const {email , password} = req.body;

    try{
        let user = await User.findOne({email});
        if(!user){
           return res.json({success: false , message: "No user exists with this email.." })
        }

        const validPassword = await bcrypt.compare(password , user.password);

        if(!validPassword){
            return res.json({success: false , message: "Invalid Password."});
        }

        const payload = {
            user: {
                id : user.id
            }
        }

        const authToken = jwt.sign(payload , JWT_SECRET);

        return res.json({success: true , authToken});

    }catch(error){
        console.log(error)
        return res.status(500).json({success: false , message: 'Internal Server Error'});
    }
})

// -----------------------------------------End of Router 2 ----------------------------------------------

router.post('/getuser' , fetchuser , async (req , res) =>{
       try{
         const user = await User.findById(req.user.id).select('-password');
         return res.send(user);
       }catch{
         return res.status(500).json({success: false , message: "Internal Server Error"})
       }
})

module.exports = router