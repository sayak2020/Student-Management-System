const mongoose = require('mongoose');
const passportLocalMongoose=require("passport-local-mongoose");
const findOrCreate = require('mongoose-findorcreate');

const login = new mongoose.Schema({
    username: {
        type: String,
    },
    password:String,
    googleId:String
});
login.plugin(passportLocalMongoose);
login.plugin(findOrCreate);

module.exports = mongoose.model('login', login);