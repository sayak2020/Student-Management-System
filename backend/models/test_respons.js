const mongoose = require('mongoose');


const test_respons= new mongoose.Schema({
    
    testID: Number,
    name: String,
    subject: String,
    student_email: String,
    studentID:String,
    answer:[String],
    totalmarks: Number,
    obtainedmarks: Number,

 
});

module.exports = mongoose.model('test_respons', test_respons);