var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    home: String,
    email: String,
    photo: String,
    lat: Number,
    lng: Number
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", UserSchema);