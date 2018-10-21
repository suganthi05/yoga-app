var mongoose = require("mongoose");
// var passportLocalMongoose = require("passport-local-mongoose");

var FavoritesSchema = new mongoose.Schema({
    user_id: String,
    yoga_id: String
});

// UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("Favorites", FavoritesSchema);