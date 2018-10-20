const mongoose = require("mongoose");
const Yoga = require("./yoga");
const Comment = require("./comment");
const User = require("./user");
const Favorites = require("./favorites");

mongoose.connect("mongodb://localhost:27017/yelp_camp_v6", {
    useNewUrlParser: true
});

function resetAlldata() {

    Yoga.remove({}, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("All Yoga Data Deleted");
        }
    });

    Comment.remove({}, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("All Comment Data Deleted");
        }
    });

    User.remove({}, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("All User Data Deleted");
        }
    });

    Favorites.remove({}, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("All Favorites Data Deleted");
        }
    });

}

module.exports = resetAlldata;