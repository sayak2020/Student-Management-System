const express = require('express');
const router = express.Router();
const test = require('../models/test');

router.post("/",async (req,res)=>{
    const newtest  = new test({
        name: req.body.name,
        subject: req.body.subject,
        questions: req.body.questions,
        
    })
    try{
        const fb = await newtest.save();
        res.status(201).json(fb);

    } catch (err) {
        res.status(400).json({message: err.message});
            
    }
})

module.exports = router