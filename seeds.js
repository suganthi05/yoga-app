var mongoose = require("mongoose");
var Yoga = require("./models/yoga");
var Comment   = require("./models/comment");
const User = require("./models/user")

var data = [
    {
        name: "Yoga Farm Studios",
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Yoga Farm Studios",
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Yoga Farm Studios",
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        amenities : [
            "Parking",
            "Lockers",
            "Smoothie Bar"
        ],
        classes : [
            "Hatha Yoga",
            "Hot Yoga",
            "Showers Yoga"
        ],
        beginners : [
            "Yes"
        ],
        name : "YYOGA Queen Street West",
        image : "https://iamyoga.ca/wp-content/uploads/2017/04/studio-experience.jpg",
        rating : 3.25,
        description : "12+ styles from stretchy to sweaty,  heated and non-heated,  for all levels of practice.",
        author : {
            id : "5bc77cfbbaa29e08f353a843",
            username : "suganthi1483@gmail.com"
        },
        cost : 100,
        location : "333 Queen St W #327, Toronto, ON M5V 2A4, Canada",
        lat : 43.649522,
        lng : -79.392015
    }
]

function seedDB() {
  //Remove all yoga
  Yoga.remove({}, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("removed yoga studios!");
    //add a few yoga
    data.forEach(function (seed) {
      Yoga.create(seed, function (err, yoga) {
        if (err) {
          console.log(err)
        } else {
          console.log("added a yoga");
          //create a comment
          Comment.create({
            text: "This place is great, but I wish there was internet",
            author: "Homer"
          }, function (err, comment) {
            if (err) {
              console.log(err);
            } else {
              yoga.comments.push(comment);
              yoga.save();
              console.log("Created new comment");
            } // else
          }); // create comment
        } // else
      }); // create
    }); // data seed
  }); // remove
}

module.exports = seedDB;
