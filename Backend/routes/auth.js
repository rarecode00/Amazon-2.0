const express = require('express');
const { findOne, create } = require('../models/User');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const JWT_SECRET = "thisissecret"

// Routes 1 : To create the User..

router.post('/createuser' , async(req , res) =>{
    const {name , email , password} = req.body;

    try{
        // If user already Exists....
        let user = await User.findOne({email})
        if(user){
            return res.status(400).send({success: false , error: "This email is already Exists"})
        }

        let salt = await bcrypt.genSalt(10);
        let secPass = await bcrypt.hash(password , salt);
        user = await User.create({
            name: name,
            email: email,
            password: secPass
        })
        console.log(user);
        const data = {
            user: user.id
        }
        const authToken = jwt.sign(data,JWT_SECRET);
        res.send({success: true , authToken,  message: "User Created Successfully"})

    }catch(error){
        console.log(error);
        res.status(500).send({success: false , message:'Internal Server Error'});
    }
})

// -------------------------------------------End OF Router 1-------------------------------------------------

module.exports = router