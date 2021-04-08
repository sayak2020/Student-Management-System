const mongoose = require('mongoose');
const { session } = require('passport');
var current = new Date();

const attendence= new mongoose.Schema({
    
    email: String,
    userid: String,
    date: {
        type: String,
        default: current.toLocaleDateString()
    },
    subject: String,
    time:{
        type:String,
        default: current.toLocaleTimeString()
    }
    
});

module.exports = mongoose.model('attendence', attendence);