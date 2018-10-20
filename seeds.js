const mongoose = require("mongoose");
const Yoga = require("./models/yoga");
const Comment = require("./models/comment");
const User = require("./models/user");
const Favorites = require("./models/favorites");

mongoose.connect("mongodb://localhost:27017/yelp_camp_v6", {
  useNewUrlParser: true
});

const data = [
  //YYOGA Queen Street West
  {
    name: "YYOGA Queen Street West",
    image: "https://iamyoga.ca/wp-content/uploads/2017/04/studio-experience.jpg",
    rating: 3.25,
    description: "12+ styles from stretchy to sweaty,  heated and non-heated,  for all levels of practice.",
    amenities: [
      "Parking",
      "Lockers",
      "Smoothie Bar"
    ],
    classes: [
      "Hatha Yoga",
      "Hot Yoga",
      "Showers Yoga"
    ],
    beginners: [
      "Yes"
    ],
    author: {
      id: "5bcb00d9720bbf38b66036e4",
      username: "suganthi1483@gmail.com"
    },
    cost: 100,
    location: "333 Queen St W #327, Toronto, ON M5V 2A4, Canada",
    lat: 43.649522,
    lng: -79.392015
  },
  //Yoga Tree Richmond and Spadina
  {
    name: "Yoga Tree Richmond and Spadina",
    image: "https://ak4.picdn.net/shutterstock/videos/5918144/thumb/2.jpg",
    rating: 4.5,
    description: "experience a variety of yoga styles including Hot Yoga, Yoga for Beginners, Reduced Heat Yoga, Hatha, Restorative, Core Yoga and much more!",
    amenities: [
      "Parking",
      "Wifi",
      "Lockers"
    ],
    classes: [
      "Hatha Yoga",
      "Hot Yoga",
      "Vinyasa Yoga"
    ],
    beginners: [
      "Yes"
    ],
    author: {
      id: "5bcb011f6bdf3339614193cb",
      username: "suga@lighthouse.ca"
    },
    cost: 35,
    location: "140 Spadina Ave, Toronto, ON M5V 2L4, Canada",
    lat: 43.6477264,
    lng: -79.3962471
  },
  //Iam Yoga Downtown
  {
    name: "Iam Yoga Downtown",
    image: "https://cdn6.dissolve.com/p/D187_218_100/D187_218_100_1200.jpg",
    rating: 4.3,
    description: "Great community and offers students the  chance to connect within the community  while offering time cleaning or supporting  our management staff on the front desk  with providing an amazing customer  experience in exchange for unlimited  access to all the classes our studios offer.",

    amenities: [
      "Parking",
      "Wifi",
      "Showers",
      "Smoothie Bar"
    ],
    classes: [
      "Hatha Yoga",
      "Hot Yoga",
      "Vinyasa Yoga"
    ],
    beginners: [
      "No"
    ],
    author: {
      id: "5bcb011f6bdf3339614193cb",
      username: "suga@lighthouse.ca"
    },
    cost: 40,
    location: "MetroCentre, 200 Wellington Street W Concourse, Unit 450, Toronto, ON M5V 3C7, Canada",
    lat: 43.64585230000001,
    lng: -79.3878634
  },
  // The Yoga Sanctuary
  {
    name: "The Yoga Sanctuary",
    image: "https://st2.depositphotos.com/1518767/6900/i/950/depositphotos_69001081-stock-photo-people-exercising-on-fitness-mats.jpg",
    rating: 4.25,
    description: "Great for the benefits of mental health,  physical health as well as balancing your  emotional and spiritual health.",
    amenities: [
      "Parking",
      "Wifi",
      "Lockers"
    ],
    classes: [
      "Bikram Yoga",
      "Showers Yoga",
      "Vinyasa Yoga"
    ],
    beginners: [
      "Yes"
    ],

    author: {
      id: "5bcb011f6bdf3339614193cb",
      username: "suga@lighthouse.ca"
    },
    cost: 35,
    location: "1 Wood St, Toronto, ON M4Y 2N4, Canada",
    lat: 43.66198809999999,
    lng: -79.38293019999999
  },
  //Yoga Tree Bay & Dundas
  {
    name: "Yoga Tree Bay & Dundas",
    image: "http://uprnc2thzbu47ptop2z7kxg1.wpengine.netdna-cdn.com/wp-content/uploads/2017/04/bay-dundas-yoga-studio-toronto-1.jpg",
    rating: 4.4,
    description: "Classes are designed to prepare new yogis for a balanced Hatha practice. ",
    amenities: [
      "Wifi",
      "Lockers",
      "Showers",
      "Smoothie Bar"
    ],
    classes: [
      "Bikram Yoga",
      "Showers Yoga",
      "Vinyasa Yoga"
    ],
    beginners: [
      "Yes"
    ],
    author: {
      id: "5bcb011f6bdf3339614193cb",
      username: "suga@lighthouse.ca"
    },
    cost: 25,
    location: "123 Dundas St W, Toronto, ON M5G 1C4, Canada",
    lat: 43.6553366,
    lng: -79.3844809
  },
  //BeHot Yoga Toronto
  {
    name: "BeHot Yoga Toronto",
    image: "http://96bda424cfcc34d9dd1a-0a7f10f87519dba22d2dbc6233a731e5.r41.cf2.rackcdn.com/behotyogatoronto/apilatespicc/apilatespicc_250x172.jpg",
    rating: 5,
    description: "The exercises in Hot Pilates, are designed so that anyone from the beginner to the advanced feels challenged, regardless of flexibility or strength.",

    amenities: [
      "Parking",
      "Wifi",
      "Lockers",
      "Showers"
    ],
    classes: [
      "Hatha Yoga",
      "Showers Yoga",
      "Vinyasa Yoga"
    ],
    beginners: [
      "No"
    ],
    comments: [],
    author: {
      id: "5bcb011f6bdf3339614193cb",
      username: "suga@lighthouse.ca"
    },
    cost: 55,
    location: "43 Colborne St, Toronto, ON M5E 1E3, Canada",
    lat: 43.6488616,
    lng: -79.37522
  },
  //YYOGA Harbourfront
  {
    name: "YYOGA Harbourfront",
    image: "https://cdn8.dissolve.com/p/D145_292_842/D145_292_842_1200.jpg",
    rating: 5,
    description: "Great place to connect with others before  and after class at our luxurious tea station,  and to take advantage of our teachers,  workshops, and classes that will help you grow.",

    amenities: [
      "Parking",
      "Wifi",
      "Lockers",
      "Showers"
    ],
    classes: [
      "Bikram Yoga",
      "Hot Yoga",
      "Vinyasa Yoga"
    ],
    beginners: [
      "Yes"
    ],
    comments: [],
    author: {
      "id": "5bcb011f6bdf3339614193cb",
      "username": "suga@lighthouse.ca"
    },
    cost: 40,
    location: "50 Queens Quay W #204, Toronto, ON M5J, Canada",
    lat: 43.6406628,
    lng: -79.3779273
  },
  // Union Yoga + Wellness
  {
    name: "Union Yoga + Wellness",
    image: "http://footage.framepool.com/shotimg/464980065-sport-mat-yoga-fitness-gym-class-procedure.jpg",
    rating: 5,
    description: "This is such a lovely yoga studio! The staff are always friendly, the teachers are fantastic and the classes are amazing! They have a combination of hot and cold yoga as well as fusion and Pilates classes. They offer free tea and free water bottles to use if you forgot yours. Renting a mat is only 2 bucks!! ",
    amenities: [
      "Parking",
      "Wifi",
      "Lockers",
      "Showers"
    ],
    classes: [
      "Bikram Yoga",
      "Vinyasa Yoga"
    ],
    beginners: [
      "Yes"
    ],
    comments: [],
    author: {
      "id": "5bcb011f6bdf3339614193cb",
      "username": "suga@lighthouse.ca"
    },
    cost: 35,
    location: "956 Bloor St W, Toronto, ON M6H 1L6, Canada",
    lat: 43.6614691,
    lng: -79.42848529999999
  }
]


function seedDB() {
  //Remove all yoga
  Yoga.remove({}, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("Removed yoga studios!");
    //add a few yoga
    data.forEach(function (seed) {
      Yoga.create(seed, function (err, yoga) {
        if (err) {
          console.log(err)
        } else {
          console.log("Added a yoga studio");
          //create a comment
          Comment.create({
            text: "This place is great, but I wish there was internet",
            author: {
              id: "5bcb00d9720bbf38b66036e4",
              username: "suganthi1483@gmail.com"
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
        }
      });
    });
  });
  setTimeout((function () {
    console.log("Seeding complete! Exiting...");
    return process.exit(1);
  }), 1000);
}

seedDB();