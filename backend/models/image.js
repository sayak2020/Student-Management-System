var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    // name: String,
    // desc: String,
    // img:
    // {
    //     data: Buffer,    
    //    contentType: String
    //  },
    //  file: Buffer,
});


module.exports = new mongoose.model('Image', imageSchema);
 