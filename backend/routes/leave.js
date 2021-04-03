const express = require('express');
const { session } = require('passport');
const router = express.Router();
const leave = require('../models/leave');

router.get('/', async (req, res) => {
    try{
        const leaveApplications = await leave.find();
        res.json(leaveApplications);

    } catch (err) {
        res.status(500).json({message: err.message});
    }

});

router.post('/', async (req, res) => {
    
    const Leave  = new leave({
        
        email: req.user.username,
        userid: req.user.id,
        from: req.body.from,
        to: req.body.to,
        cause: req.body.cause
    })
    try{
        const leaveApp = await Leave.save();
        res.status(201).json(leaveApp);

    } catch (err) {
        res.status(400).json({message: err.message});
            
    }


});
module.exports = router;
