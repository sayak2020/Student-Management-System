const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

const admin_login = new mongoose.Schema({
  username: {
    type: String,
  },
  password: String,
  name: String,
});
admin_login.plugin(passportLocalMongoose);
admin_login.plugin(findOrCreate);

module.exports = mongoose.model("admin_login", admin_login);