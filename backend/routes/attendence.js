const express = require('express');
const { session } = require('passport');
const router = express.Router();
const Attendence = require('../models/attendence');

router.post('/:id/:email', async (req, res) => {
    
    const attendence  = new Attendence({
        
        email: req.params.email,
        userid: req.params.id,
        //date: req.body.date,
        subject: req.body.subject
       // time: req.body.time
    })
    try{
        const newattendence = await attendence.save();
        res.status(201).json(newattendence);

    } catch (err) {
        res.status(400).json({message: err.message});
            
    }


});

router.get(`/:id`, getStudentAttendence, async (req,res) =>{ 
    if(res.attendence == null){
        res.json({"message":'No attendence found'})
    }
    else{
        res.json(res.attendence)
    }
})

async function getStudentAttendence (req, res, next ){ // getsubscriber works as a middle wear
    let attendence;
    try{
        attendence = await Attendence.find({'userid':req.params.id});
        //console.log(attendence);
        if (attendence.length === 0) {
            return res.status(404).json({message: 'Cannot find any attendence'});
        }
    } catch(err) {
        res.status(500).json({message: err.message});
    }
    res.attendence = attendence;
   // res.json(subscriber.name);
    next();

}
module.exports = router;