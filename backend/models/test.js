const mongoose = require('mongoose');


const test= new mongoose.Schema({
    
    testID: Number,
    status:{
        type:String,
        default:"live"
    },
    name: String,
    subject: String,
    questions:[{
        question: String,
        options: [{
            A:String,
            B:String,
            C:String,
            D:String,   
        }],
        ans:String,
        marks:Number,
    }]
 
});


test.plugin(autoIncrement.plugin, { model: 'test', field: 'testID' });



module.exports = mongoose.model('test', test);