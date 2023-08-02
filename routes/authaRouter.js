const express = require("express");
const rauter = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "rtyuiofbnmwtyuuid"

rauter.post("/register",[
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
],async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        
    
    let user =await User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({error:"this email id is already exist"})
    }
    const salt =await bcrypt.genSalt(10);
    const hashpass =await bcrypt.hash(req.body.password,salt)

    //create a new user
    user =await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashpass,
    })

    const data={
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data,JWT_SECRET)
    
    res.json({token})
    
    } catch (error) {
        console.log(error)
        res.status(500).send("error")
    }
})

//login router

rauter.post("/login",[
    body('email').isEmail(),
    body('password').exists()
],async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {email,password} = req.body
    try {
    let user =await User.findOne({email})
    if(!user){
        return res.status(400).json({ errors: errors.array() });
    }
    const compare =await bcrypt.compare(password,user.password)
    if(!compare){
        return res.status(400).json({ errors: errors.array() })
    }
    const data={
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data,JWT_SECRET)
    
    res.json({token})
    
    } catch (error) {
        console.log(error)
        res.status(500).send("error")
    }
})
module.exports =rauter