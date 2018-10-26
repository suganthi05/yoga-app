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
    rating: 3,
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
    name: "Yoga Tree Richmond",
    image: "https://ak4.picdn.net/shutterstock/videos/5918144/thumb/2.jpg",
    rating: 4,
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
    rating: 4,
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
    rating: 4,
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
    lng: -79.38293019999999,
  },
  //Yoga Tree Bay & Dundas
  {
    name: "Yoga Tree Bay & Dundas",
    image: "http://uprnc2thzbu47ptop2z7kxg1.wpengine.netdna-cdn.com/wp-content/uploads/2017/04/bay-dundas-yoga-studio-toronto-1.jpg",
    rating: 4,
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
      "Vinyasa Yoga",
      "Prenatal Yoga"
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
  },
//del-la-sol yoga
  {
  name : "De La Sol Yoga",
  image : "https://images.pexels.com/photos/1375883/pexels-photo-1375883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
  rating : 3,
  description : "An awesome studio. They have great monthly pass deals on sometimes, tons of classes and good amenities. No parking though so have to drop it a star.",

  amenities : [
    "Lockers",
    "Showers"
  ],
  classes : [
    "Hatha Yoga",
    "Bikram Yoga",
    "Hot Yoga",
    "Showers Yoga",
    "Vinyasa Yoga"
  ],
  beginners : [
    "Yes"
  ],
  comments : [ ],
  author : {
    "id" : "5bcc75fab6ad31596f0d919b",
    "username" : "user"
  },
  cost : 20,
  location : "430 York Blvd, Hamilton, ON L8R 3K8, Canada",
  lat : 43.2654864,
  lng : -79.8809143,
},
//aviva yoga studio
{
  name : "Aviva Yoga Studio",
  image : "https://images.pexels.com/photos/901439/pexels-photo-901439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  rating : 5,
  description : "Awesome location at the Cotton Factory in hamilton. As a beginner I went for Yoga fundamentals and it was a great class.  ",

  amenities : [
    "Parking",
    "Wifi",
    "Lockers",
    "Showers"
  ],
  classes : [
    "Hatha Yoga",
    "Bikram Yoga",
    "Showers Yoga",
    "Vinyasa Yoga"
  ],
  beginners : [
    "Yes"
  ],
  comments : [ ],
   author : {
    "id" : "5bcc75fab6ad31596f0d919b",
    "username" : "user"
  },
  cost : 30,
  location : "270 Sherman Ave N, Hamilton, ON L8L 6N4, Canada",
  lat : 43.2602691,
  lng : -79.83378859999999,
},
//shanti yoga studio
{
  name : "Shanti Yoga Studio",
  image : "https://images.pexels.com/photos/1103242/pexels-photo-1103242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
  rating : 3,
  description : "A studio focused on Hatha Yoga, suitable for all levels. Studio could use some upgrades though.",

  amenities : [
    "Lockers"
  ],
  classes : [
    "Hatha Yoga"
  ],
  beginners : [
    "Yes"
  ],
  comments : [ ],
  author : {
    "id" : "5bcc75fab6ad31596f0d919b",
    "username" : "user"
  },
  cost : 17.7,
  location : "150 Locke St S, Hamilton, ON L8P 4A9, Canada",
  lat : 43.2563397,
  lng : -79.8857261,
},
//bikram yoga dundas
{
   name: "Bikram Yoga Dundas",
  image : "https://images.pexels.com/photos/1496138/pexels-photo-1496138.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
  rating : 4,
  description : "Classes were ok but would go back for the relaxing vibe of the studio, the studio was great. Huge change rooms, and a store to buy yoga supplies inside.",

  amenities : [
    "Parking",
    "Wifi",
    "Lockers",
    "Showers",
    "Smoothie Bar"
  ],
  classes : [
    "Bikram Yoga",
    "Hot Yoga"
  ],
  beginners : [
    "No"
  ],
  comments : [ ],
  author : {
    "id" : "5bcc75fab6ad31596f0d919b",
    "username" : "user"
  },
  cost : 20,
  location : "1 East Street N, Dundas, ON L9H 1N5, Canada",
  lat : 43.2664938,
  lng : -79.9444963,
},
//be well yoga and wellness
{
  name : "Be Yoga and Wellness",
  image : "https://images.pexels.com/photos/892682/pexels-photo-892682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
  rating : 5,
  description : "Beautiful place - tea room, complimentary towel service, cork board floors and spa-like feel!",

  amenities : [
    "Parking",
    "Lockers",
    "Showers"
  ],
  classes : [
    "Hatha Yoga",
    "Showers Yoga",
    "Vinyasa Yoga"
  ],
  beginners : [ ],
  comments : [ ],
  author : {
    "id" : "5bcc75fab6ad31596f0d919b",
    "username" : "user"
  },
  cost : 15.93,
  location : "4031 Fairview St, Burlington, ON L7L 2A4, Canada",
  lat : 43.3609125,
  lng : -79.779545,
},
//Modo Yoga
{
  name : "Modo Yoga",
  image : "https://images.pexels.com/photos/892681/pexels-photo-892681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
  rating : 4,
  description : "Teachers are amazing here, green and environmentally friendly studio. Downside - no parking. ",

  amenities : [
    "Lockers",
    "Showers"
  ],
  classes : [
    "Hatha Yoga",
    "Vinyasa Yoga"
  ],
  beginners : [
    "No"
  ],
  comments : [ ],
   author : {
    "id" : "5bcc75fab6ad31596f0d919b",
    "username" : "user"
  },
  cost : 19.47,
  location : "676 Appleby Line, Burlington, ON L7L 6J9, Canada",
  lat : 43.371399,
  lng : -79.7618044,
},
// sun yoga
{
  name : "Sun Yoga",
  image : "https://images.pexels.com/photos/1308746/pexels-photo-1308746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
  rating : 3.5,

  amenities : [
    "Parking",
    "Lockers"
  ],
  classes : [
    "Hatha Yoga",
    "Bikram Yoga",
    "Hot Yoga",
    "Showers Yoga",
    "Vinyasa Yoga"
  ],
  beginners : [
    "Yes"
  ],
  comments : [ ],
   description : "I come here for the great teachers. Studio isnt so great.",
  author : {
    "id" : "5bcc75fab6ad31596f0d919b",
    "username" : "user"
  },
  cost : 17,
  location : "785 Pacific Rd, Oakville, ON L6L, Canada",
  lat : 43.41356409999999,
  lng : -79.7335466,
},
//Power Yoga - Oakville
{
   name : "Power Yoga - Oakville",
  image : "https://images.pexels.com/photos/374694/pexels-photo-374694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
  rating : 5,

  amenities : [
    "Parking",
    "Wifi",
    "Lockers",
    "Showers",
    "Smoothie Bar"
  ],
  classes : [
    "Hatha Yoga",
    "Bikram Yoga",
    "Hot Yoga",
    "Showers Yoga",
    "Vinyasa Yoga"
  ],
  beginners : [
    "Yes"
  ],
  comments : [ ],
  description : "A chain of yoga studios, great programs and amenities. Has an awesome protein shake bar.",
  author : {
    "id" : "5bcc75fab6ad31596f0d919b",
    "username" : "user"
  },
  cost : 22,
  location : "485 Trafalgar Rd, Oakville, ON L6J 3J1, Canada",
  lat : 43.4564779,
  lng : -79.6799831,
},
//yoga shala waterdown
{
  name : "The Yoga Shala Waterdown",
  image : "https://images.pexels.com/photos/1472887/pexels-photo-1472887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  rating : 3,
  website : "https://www.yogashalawaterdown.com/",
  phone : "(905) 689-9642",
  description : "Holistic 'old time' feel with this Studio. The teachers are great, and hot tea for after class!  However, no parking means I have to mark it down.",

  amenities : [
    "Wifi",
    "Lockers",
    "Showers",
    "Smoothie Bar"
  ],
  classes : [
    "Bikram Yoga",
    "Hot Yoga",
    "Vinyasa Yoga"
  ],
  beginners : [
    "No"
  ],
  comments : [ ],
  author : {
    "id" : "5bd0dee224af1d5b0dc5cfb0",
    "username" : "jack"
  },
  cost : 17.7,
  location : "312 Dundas St E, Waterdown, ON L0R 2H0, Canada",
  lat : 43.333578,
  lng : -79.8923657,
},
//kula yoga studio
{
  name : "Kula Yoga Studio",
  image : "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bb4481aac50fea7917a2c6ad4617c94f&auto=format&fit=crop&w=800&q=60",
  rating : 2,
  website : "https://www.oakville.mykula.org/",
  phone : "905.829.3443",
  description : "I was expecting a better place from all of the hype honestly. It was old, teachers were old, classes were slow, no real amenities. Bleh",

  amenities : [
    "Parking"
  ],
  classes : [
    "Hatha Yoga",
    "Bikram Yoga",
    "Hot Yoga",
    "Vinyasa Yoga"
  ],
  beginners : [ ],
  comments : [ ],
   author : {
    "id" : "5bd0dee224af1d5b0dc5cfb0",
    "username" : "jack"
  },
  cost : 20,
  location : "2640 Bristol Cir, Oakville, ON L6H 6Z7, Canada",
  lat : 43.5126856,
  lng : -79.68783309999999,
}



]


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

  //Remove all user data
  User.remove({}, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("Removed user data!");
  });

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

  setTimeout((function () {
    console.log("Seeding complete! Exiting...");
    return process.exit(1);
  }), 1000);
}

seedDB();