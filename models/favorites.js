var mongoose = require("mongoose");
// var passportLocalMongoose = require("passport-local-mongoose");

var FavoritesSchema = new mongoose.Schema({
    user_id: String,
    yoga_id: String
    // user: {
    //     id: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "User"
    //     }
    // },
    // yoga: {
    //     id: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Yoga"
    //     }
    // }
});

// UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("Favorites", FavoritesSchema);