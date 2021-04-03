const mongoose = require('mongoose');
const session = require('express-session');

const student_profile = new mongoose.Schema({

    userid: String,
    name: {
        type: String,
       // required: true,
        default: null
    },
    email: {
        type: String,
        //required: true,
        default: null
    },
    phone: {
        type: String,
        //required: true,
        default: null
    },
    class: {
        stream:{
                 type: String,
                 default: null
        },
        section:{
             type: String,
             default: null
        },

        year:{
            type: String,
            default: null
        }
    },
    address: {
        
        street:{
            type: String,
            default: null
        },
	    city: {
            type: String,
            default: null
        },
        pin: {
            type: String,
            default: null
        }
        
    }

});

module.exports = mongoose.model('student_profile', student_profile);