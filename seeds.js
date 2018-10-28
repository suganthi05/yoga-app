const mongoose = require("mongoose");
const Yoga = require("./models/yoga");
const Comment = require("./models/comment");
const User = require("./models/user");
const Favorites = require("./models/favorites");
const data = require("./seeddata");
mongoose.connect("mongodb://localhost:27017/yelp_camp_v6", {
  useNewUrlParser: true
});

function seedDB() {
  //Remove all yoga
  Yoga.remove({}, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("Removed yoga studios data!");
  });

  //Remove all comments data
  Comment.remove({}, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("Removed comments data!");
  });

  /*  
  //Remove all user data
  User.remove({}, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("Removed user data!");
  });
  */
  
  //Remove all favorites data
  Favorites.remove({}, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("Removed favorites data!");
  });

  //add a few yoga
  data.forEach(function (seed) {
    Yoga.create(seed, function (err, yoga) {
      if (err) {
        console.log(err)
      } else {
        console.log("Added a yoga studio");
        //create a comment
        seed.commentfeed.forEach(function (review) {
          Comment.create({
            text: review.text,
            rating: review.rating,
            author: {
              id: "5bd5e502075c5c1909b7d6cb",
              username: review.usernamefeed
            }
          }, function (err, comment) {
            if (err) {
              console.log(err);
            } else {
              yoga.comments.push(comment);
              yoga.save();
              console.log("Created new comment for yoga studio");
            }
          });
        });
      }
    });
  });

  setTimeout((function () {
    console.log("Seeding complete! Exiting...");
    return process.exit(1);
  }), 1000);
}

seedDB();