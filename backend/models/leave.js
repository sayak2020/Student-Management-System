const mongoose = require('mongoose');
const { session } = require('passport');

const leave = new mongoose.Schema({
    
    email: String,
    userid: String,
    from: String,
    to: String,
    cause: String,
    leaveID:{
        type: Number,
    },
    status: {
        type: String,
        default: "pending"
    }
});
leave.plugin(autoIncrement.plugin, { model: 'leave', field: 'leaveID' });

module.exports = mongoose.model('leave', leave);