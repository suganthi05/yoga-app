const mongoose = require("mongoose");
const Yoga = require("./models/yoga");
const Comment = require("./models/comment");
const User = require("./models/user");
const Favorites = require("./models/favorites");

mongoose.connect("mongodb://localhost:27017/yelp_camp_v6", {
  useNewUrlParser: true
});


const data =



/*
[
  //YYOGA Queen Street West
  {
    name: "YYOGA Queen Street West",
    image: "https://iamyoga.ca/wp-content/uploads/2017/04/studio-experience.jpg",
    rating: 3,
    website: "https://yyoga.ca/locations/queen-street-west",
    phone :"(416) 792-2211",
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
      username: "Suganthi"
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
    website:"http://www.yogatree.ca/richmond-spadina/",
    phone :"(416) 603-9642",
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
      username: "Suganthi"
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
    website:"https://iamyoga.ca/",
    phone :"(416) 597-8557",
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
      username: "Nila"
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
    website:"https://www.theyogasanctuary.ca/",
    phone :"(416) 928-3236",
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
      username: "Suganthi"
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
    website:"http://www.yogatree.ca/bay-dundas/",
    phone : "(416) 205-9642",
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
      username: "Alex"
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
    website:"http://behotyogatoronto.com/",
    phone :"(416) 203-2382",
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
      username: "Victor"
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
    website:"https://yyoga.ca/locations/harbourfront",
    phone :"(416) 240-6175",
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
      "username": "Andrea"
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
    website:"http://www.unionyogastudio.ca/",
    phone : "(416) 516-0909",
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
      "username": "Suganthi"
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
  website: "http://waterdown.delasolyoga.com/",
  phone : "(289) 895-8222",
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
    "username" : "Lynda"
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
  website: "https://www.avivayogastudio.com/",
  phone :"(289) 208-2753",
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
    "username" : "Paul"
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
  website: "http://shantiyogainhamilton.com/",
  phone : "(905) 962-9642",
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
    "username" : "Victor"
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
  website: "http://redtreehotyoga.com/",
  phone : "(416) 503-9991",
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
    "username" : "Anna"
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
  website: "http://www.beyogabe.com/",
  phone : "(905) 634-5852",
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
    "username" : "Lima"
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
  website: "https://modoyoga.com/",
  phone : "(905) 634-5852",
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
    "username" : "Paul"
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
  website: "http://www.sunyoga.ca/",
  phone : "(905) 469-3309",

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
    "username" : "Daniel"
  },
  cost : 17,
  location : "785 Pacific Rd, Oakville, ON L6L, Canada",
  lat : 43.41356409999999,
  lng : -79.7335466,
},
//Power Yoga - Oakville
{
   name : "Power Yoga-Oakville",
  image : "https://images.pexels.com/photos/374694/pexels-photo-374694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
  rating : 5,
  website:"https://poweryogacanada.com/",
  phone : "(905) 403-9642",
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
    "username" : "Elisa"
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
    "username" : "Jack"
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
    "username" : "George"
  },
  cost : 20,
  location : "2640 Bristol Cir, Oakville, ON L6H 6Z7, Canada",
  lat : 43.5126856,
  lng : -79.68783309999999,
},
//--------------------Missisauga------
{
    "name": "Power Yoga Canada City Centre",
    "image": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAACwzL58YKSn5s1wTprraceH-S6QWbptg9ijilMLC5ab7H3FP6bCvZwukZmJtHDrKfhyPwVNDXMk6Ba9LD7-V09bn_LCJZlOMzRo0-Pu7uWNHxRzGMEaAkCWURqklep2_QEhAvQP-ZjjFIVFiPAVUjC-vzGhQN7DM5iWag8j1gqx29Ft5_c5P39w&3u1024&4u1024&5m1&2e1&callback=none&key=AIzaSyDVNqmxoPpZXHe89d2y12ozPDVjoLAk4hw&token=123313",
    "rating": 5,
    "website": "http://www.poweryogacanada.com/city-centre",
    "phone": "(905) 949-9997",
    "description": "Amazing place with awesome offerings. Sarah and Tania are very warm and welcoming! They are attentive to every detail.I strongly recommend this community for its instructors and programs. Thank you!",
    "amenities": [
      "Wifi",
      "Locker",
      "Smoothie Bar"
    ],
    "author": [
      {
        "id": "5bcb00d9720bbf38b66036e7"
      },
      {
        "username": "Jessica"
      }
    ],
    "classes": [
      "Hatha Yoga",
      "Bikram Yoga",
      "Vinyasa Yoga"
    ],
    "beginners": [
      "Yes"
    ],
    "cost": 10
    ,
    "location": "925 Rathburn Road East Unit B1, Mississauga",
    "lat": 43.61608299999999,
    "lng": -79.61757599999999
  },
  {
    "name": "moksha yoga square one",
    "image": "https://lh3.googleusercontent.com/p/AF1QipNfWLe898cP89cDcFqZbBGkVIJcoXpjv3ENA-qm=s1600-w1024-h1024",
    "rating": 4,
    "website": "http://www.mokshayogasquareone.com/",
    "phone": "(905) 232-0165",
    "description": "The most gracious studio I have ever been to! The staff are super supportive and really care about the people who come in. I hurt myself and couldn't make it in for a week, and without asking they called me to extend my 1 month pass since I hadn't visited in a while. Instantly brightened my day; a true testament to their culture and sense of community.",
    "amenities": [
      "Parking",
      "Locker",
      "Smoothie Bar"
    ],
    "author": [
      {
        "id": "5bcb00d9720bbf38b66036e4"
      },
      {
        "username": "Alice"
      }
    ],
    "classes": [
      "Hatha Yoga",
      "Hot Yoga",
      "Vinyasa Yoga"
    ],
    "beginners": [
      "Yes"
    ],
    "cost": 
      12
    ,
    "location": "4175 Confederation Parkway #5, Mississauga",
    "lat": 43.58880299999999,
    "lng": -79.64948729999998
  },
  {
    "name": "Hatch Yoga",
    "image": "https://lh3.googleusercontent.com/p/AF1QipMQ8N-L9M1Qiu-QL51VDVoiFTbTBsaKolT6QW0y=s1600-w1024-h1024",
    "rating": 4.8,
    "website": "http://www.hatchyoga.com/",
    "phone": "(905) 232-2292",
    "description": "Hatch is a wonderful and welcoming studio! The instructors are lovely, varying class times and a beautiful (+clean) studio. Its a win win! Personally I love and recommend the restorative practice on Mondays at 8pm!",
    "amenities": [
      "Wifi",
      "Locker",
      "Smoothie Bar"
    ],
    "author": [
      {
        "id": "5bcb00d9720bbf38b66036e7"
      },
      {
        "username": "Jessica"
      }
    ],
    "classes": [
      "Hot Yoga",
      "Bikram Yoga",
      "Vinyasa Yoga"
    ],
    "beginners": [
      "No"
    ],
    "cost": 
      10
    ,
    "location": "626 Burnhamthorpe Road West #202, Mississauga",
    "lat": 43.58023619999999,
    "lng": -79.6500332
  }



]
*/

[
  {
    "name": "Le Refuge Yoga",
    "image": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAs0hUW_aZNNV42wPSnaD-medM2C0mjrnXOHTDK0ULyzaqsw-vqo-MEwEE3a4LVvu742oTMktn7azX4MRu6fp9ceESg2hJ1gy2aCKGmWbp-Q88ckS6LkKRHb-__jAGZUKcEhDAugEeyH_5BMAJwbANcJCzGhRhj6JE5-SSf7dr3WeC-j2p9cQSpw&3u1024&4u1024&5m1&2e1&callback=none&key=AIzaSyDVNqmxoPpZXHe89d2y12ozPDVjoLAk4hw&token=12515",
    "website": "http://www.lerefugeyoga.com/",
    "phone": "(416) 704-0238",
    "description": "Yoga Studio",
    "amenities": [
      "Parking",
      "Locker",
      "Wifi"
    ],
    "author": 
      {
        "id": "5bd5eccd075c5c1909b7d6d6",
        "username": "Alice"
      }
    ,
    "classes": [
      "Hatha Yoga",
      "Bikram Yoga",
      "Vinyasa Yoga"
    ],
    "beginners": [
      "No"
    ],
    "cost": 20,
    "location": "241 Cossack Court, Mississauga",
    "lat": 43.583818,
    "lng": -79.62810100000002,
    "commentfeed": [
      {
        "text": "This is good yoga studio.",
        "rating": 4
      }
    ]
  },
  {
    "name": "Yoga Netwok of Canada Yoga Teacher Training",
    "image": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRZAAAAHALwlSctMtyuMr8Euq9L-0iouOPQFb-abwLzp2t5tezeMR4k64RG3JEO0qkhuWLeSLiFIndu07P_XOrWb6_co_BlmztM2TcAmxRo4RkmGhyc-SyTokJ9QAliIC_TtQtjEhB-whEhg0cltxnlkOd8lPM-GhTOhY--WSfoMsGPKGaMU-1vpas-GA&3u1024&4u1024&5m1&2e1&callback=none&key=AIzaSyDVNqmxoPpZXHe89d2y12ozPDVjoLAk4hw&token=114910",
    "phone": "(416) 662-3785",
    "description": "Yoga Studio",
    "amenities": [
      "Wifi",
      "Locker",
      "Smoothie Bar"
    ],
    "author": 
      {
        "id": "5bd5ed82075c5c1909b7d6d8",
        "username": "Lucia"
      }
    ,
    "classes": [
      "Hatha Yoga",
      "Bikram Yoga",
      "Vinyasa Yoga"
    ],
    "beginners": [
      "Yes"
    ],
    "cost": 10,
    "location": "30 Eglinton Avenue West #258, Mississauga",
    "lat": 43.6056743,
    "lng": -79.65275429999997,
    "commentfeed": [
      {
        "text": "This is good yoga studio.",
        "rating": 4
      }
    ]
  },
  {
    "name": "Hot Yoga and Pilates",
    "image": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAxyT0UcKULbbn_nvvtPouCYlZ2jm2arcKX4-mh4vvPK-Zy722weDAhSGNJev2ycvAdUq3AhMf09WVPpCz_4c8NGSaxjxHADSnnzO5cGQSBXUINMqAhws8uuK0rDSvZo9KEhA3tL8D0azOSAQPF9tq_o38GhQExMN7WVCmbY6gWns75LMqDOh6Gw&3u1024&4u1024&5m1&2e1&callback=none&key=AIzaSyDVNqmxoPpZXHe89d2y12ozPDVjoLAk4hw&token=51676",
    "rating": 4.7,
    "website": "http://www.hotyogaandpilates.com/",
    "phone": "(289) 521-1468",
    "description": "I enjoy myself every time I come here and also get a killer workout--there is a nice variety of classes and I'm pretty sure I have taken classes with each of the instructors. Everyone is super welcoming and helpful. The studio is always clean and the hot yoga room is top notch! The best part is the sense of community and how the owners, Mike and Lisa, are so passionate about their practice, and really try to make everyone feel welcome walking in. I love the encouraging atmosphere.",
    "amenities": [
      "Wifi",
      "Locker",
      "Smoothie Bar"
    ],
    "author": 
      {
        "id": "5bd5ed82075c5c1909b7d6d8",
        "username": "Lucia"
      }
    ,
    "classes": [
      "Hatha Yoga",
      "Bikram Yoga",
      "Vinyasa Yoga"
    ],
    "beginners": [
      "No"
    ],
    "cost": 10,
    "location": "1170 Burnhamthorpe Road West Unit 28, Mississauga",
    "lat": 43.5679783,
    "lng": -79.66273330000001,
    "commentfeed": [
      {
        "text": "I've been here a few times with a friend (who comes more often) when they have had a promotion for a free class. Interestingly, both times I came, Mike was teaching the class and both times, when I walked in, he greeted everyone except me, like I was invisible! I felt bad the first time but chalked it up to an oversight. However, the second time it happened I was angry and that is why I'm posting the review. I ended up not signing in at the desk either time, although I know you are supposed to. My friend mentioned some instructors aren't that friendly or helpful but she likes the classes and its close to her house so she comes anyway. She also said that Mike was the owner so I was especially not impressed. Customer service is important even more for owners!\n\nThe classes were okay but I feel they are overpriced even if you buy on a promotion. I go to another yoga studio where we get corrections to our poses much more often, and I prefer it that way. Here, only a few students get corrections even though many people are doing wrong things.\n\nOverall, I would not recommend this place and don't plan on going back for any more free classes. I want to be treated well when I'm doing my yoga.\n\nUpdate: In response to the owner's reply:\n\nHello Lisa,\n\nThank you for your message. You are right in that I did not write the review immediately. I was reminded of my experiences when I got together with my friend yesterday for dinner. You said my review is unfair, I don't agree. For instance, according to her, when she signs in some instructors sometimes just make sure she scans the tag, they don't say hello, they just say thanks when the tag scans. Some instructors don't always say hello when she says hi to them, they just look at her to make sure the tag scans. She would never review your business because you know her and she doesn't want to make it awkward. It's not always friendly but she feels the classes are good for her health.\n\nIt sounds like you are coming up with reasons to excuse Mike for not greeting me when it would have been sufficient just to apologize for it and commit to it not happening again. I didn't \"bother\" to sign in at the desk because he was rude and I didn't want to speak with him. There were a fair amount of people at the free classes but the desk was not crowded either time when I got there and everyone except for me was acknowledged both times. I can't dismiss it as chance both times. Then you are commenting on the date of my review so as to discredit it. Unfortunately your response does not create any good faith, nor does it give me any motivation to return to the studio.",
        "rating": 2
      }
    ]
  },
  {
    "name": "Mind to Body Yoga & Fitness",
    "image": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAiCMUMByZ7ZQDULi200WAcbM5R5OEy1f_KH4RiuPjcuZJj2xBYq_OP95btPZJ8cN5NttAvU9kCUAZ7E7xw-jB3-E7sER1y-RpkEwhrfobDP7a7PwhzjmolOE-6zBoypBfEhDLuI3Rvv8_-MFX0-hrCOhrGhTZnv3qEKvYPYAGvZ4mN6vnB9AS9Q&3u1024&4u1024&5m1&2e1&callback=none&key=AIzaSyDVNqmxoPpZXHe89d2y12ozPDVjoLAk4hw&token=22753",
    "rating": 4.8,
    "website": "http://mindtobody.ca/",
    "phone": "(905) 712-9642",
    "description": "Mind to Body is a wonderful and welcoming yoga studio for all. Levels \nGreat teachers that really know their stuff also the members are very friendly \nThis studio is very clean  and  well taken care of \nPritpal is amazing! I did my yoga teachers training here and I was very pleased with the entire program I left the program with such Great knowledge for yoga  and life long friends\nJust try it for a week you won't be disappointed :)",
    "amenities": [
      "Parking",
      "Shower",
      "Locker",
      "Wifi"
    ],
    "author": 
      {
        "id": "5bd5ed2c075c5c1909b7d6d7",
        "username": "Deepika"
      }
    ,
    "classes": [
      "Hatha Yoga",
      "Hot Yoga",
      "Prenatal Yoga"
    ],
    "beginners": [
      "No"
    ],
    "cost": 30,
    "location": "75 Watline Avenue #137, Mississauga",
    "lat": 43.6227244,
    "lng": -79.67128819999999,
    "commentfeed": [
      {
        "text": "I come to Mississauga for business and found this studio when I looked out my hotel window.  \n\nCan’t recommend this place more highly - I’ve taken several of their hot classes and they are amazing.  Not pretentious in the least and very willing to help a novice yogi!!  Just finished tonight’s hot power core class - awesome!\n\nCan’t wait until my next trip up from Massachusetts!!  Namaste.",
        "rating": 5
      }
    ]
  },
  {
    "name": "moksha yoga square one",
    "image": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAELiTIOtmH6dICD2g-tqIAU_6pfTybjXuINp_N9cpw3NU2JwpWg9kFusYkLRBR1TMd_d5YWzvLNVrs5JE_9hoEuzB0RP4JTixu2S2sw8DLDYdWqK4Oa0Tqor6ExUvAW9tEhD0td2_ODuvf_FKpHvIWGVvGhSnEFjx7J5Z3RmobWqIskTFPE7xIw&3u1024&4u1024&5m1&2e1&callback=none&key=AIzaSyDVNqmxoPpZXHe89d2y12ozPDVjoLAk4hw&token=49294",
    "rating": 4,
    "website": "http://www.mokshayogasquareone.com/",
    "phone": "(905) 232-0165",
    "description": "I love this studio, the teachers and the staff. The classes are amazing. My body and sleep really appreciate it. Thanks... Moksha Yoga Square One =)",
    "amenities": [
      "Parking",
      "Locker",
      "Smoothie Bar"
    ],
    "author": 
      {
        "id": "5bd5ec87075c5c1909b7d6d5",
        "username": "Priyanka"
      }
    ,
    "classes": [
      "Hatha Yoga",
      "Hot Yoga",
      "Vinyasa Yoga"
    ],
    "beginners": [
      "Yes"
    ],
    "cost": 12,
    "location": "4175 Confederation Parkway #5, Mississauga",
    "lat": 43.58880299999999,
    "lng": -79.64948729999998,
    "commentfeed": [
      {
        "text": "The most gracious studio I have ever been to! The staff are super supportive and really care about the people who come in. I hurt myself and couldn't make it in for a week, and without asking they called me to extend my 1 month pass since I hadn't visited in a while. Instantly brightened my day; a true testament to their culture and sense of community.",
        "rating": 5
      }
    ]
  },
  {
    "name": "Infinite Yoga",
    "image": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAjXKS_htfM4qgiJ40aS1BSERREsldfA8zyQDY3Muxh8vFGliE_VxPXO0Tk0RF0_QcdTBCNsO8krukKSFjzYIgZZg4_5P4T9g5fS8RMYbpxkyTDjOM79rxyddX_pkdmujTEhAXaGduXRHfH10OzOe_4HvrGhS829jCr3cubVm0jV8-2QLSZ7z_Og&3u1024&4u1024&5m1&2e1&callback=none&key=AIzaSyDVNqmxoPpZXHe89d2y12ozPDVjoLAk4hw&token=99497",
    "rating": 3.9,
    "website": "https://www.infiniteyoga.ca/",
    "phone": "(416) 830-3418",
    "description": "Love the studio. I have been practicing here for 5+ years. The staff are wonderful.",
    "amenities": [
      "Parking",
      "Locker",
      "Smoothie Bar"
    ],
    "author": 
      {
        "id": "5bd5ec87075c5c1909b7d6d5",
        "username": "Priyanka"
      }
    ,
    "classes": [
      "Hot Yoga",
      "Bikram Yoga",
      "Vinyasa Yoga"
    ],
    "beginners": [
      "No"
    ],
    "cost": 20,
    "location": "4870 Tomken Road, Mississauga",
    "lat": 43.625834,
    "lng": -79.62927079999997,
    "commentfeed": [
      {
        "text": "I have an accruing injuries for playing different kind of sports. I never thought that hot yoga can help my body gain flexibility and help my lower back releases tension and tightness. I been practicing hot yoga at Infinite Yoga Studio for years and I'm glad I did. The community that they created is great. People are nice, they treat you well, I tried different classes and meet different teachers and every one got  different style and practices and mostly respectful to the students. They show modifications, show's how to use props and also they show the proper alignment towards poses. What I really like is they make you are feel welcome every time you come to the studio. They talked to you and pay attention if you have any questions on how to improve your poses. Everyone has a favourite teacher and classes to attend, they alternate teachers and I also go different days and time depending with my availability from work. But ever since I'm glad that Infinite Yoga is part of my community and through yoga it teaches me how to be more aware of my body.",
        "rating": 5
      }
    ]
  },
  {
    "name": "Power Yoga Canada City Centre",
    "image": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAADttAGYwiSZYqXP7vHhPKZi07evnW9e9ke7v4NbcZbBoayJKlDkv9zZdcCQB4aoJdCt87GM2c_k44mydepn9bKAe-cuxpVyqTL2dHBY07RB4lsSvkeTjRaMDMmRz8olhTEhBMiXNnTyaufWCQq0DapT2TGhQHPTNlywMxAWU-ELzoritB8OQHCg&3u1024&4u1024&5m1&2e1&callback=none&key=AIzaSyDVNqmxoPpZXHe89d2y12ozPDVjoLAk4hw&token=59598",
    "rating": 5,
    "website": "http://www.poweryogacanada.com/city-centre",
    "phone": "(905) 949-9997",
    "description": "Amazing place with awesome offerings. Sarah and Tania are very warm and welcoming! They are attentive to every detail.I strongly recommend this community for its instructors and programs. Thank you!",
    "amenities": [
      "Wifi",
      "Locker",
      "Smoothie Bar"
    ],
    "author": 
      {
        "id": "5bd5ed82075c5c1909b7d6d8",
        "username": "Lucia"
      }
    ,
    "classes": [
      "Hot Yoga",
      "Bikram Yoga",
      "Vinyasa Yoga"
    ],
    "beginners": [
      "No"
    ],
    "cost": 10,
    "location": "925 Rathburn Road East Unit B1, Mississauga",
    "lat": 43.61608299999999,
    "lng": -79.61757599999999,
    "commentfeed": [
      {
        "text": "The location of PYC City Centre is so convienant. The staff and EE's are awesome! 9:30 am classes are the BEST way to start the day. So happy a PYC opened up in this area 🙌🙌🙌",
        "rating": 5
      }
    ]
  },
  {
    "name": "Hatch Yoga",
    "image": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAA67__CR7LLf6Gdph7yIrt8kA0yddH45kF9asdTA7krfRxXVxPz1k3cq4WijDD2zAqF7_I_Aa3_LZxRG_bBn8ejSfLgJbJYcJl3mSx3lsM4wsgEA9IfZo61lknQxNT0--DEhAt3obDYKorzd8YOe5PjOTUGhSwU2ezFeU_Jo_z5ysTYYhPNZYrWg&3u1024&4u1024&5m1&2e1&callback=none&key=AIzaSyDVNqmxoPpZXHe89d2y12ozPDVjoLAk4hw&token=119263",
    "rating": 4.8,
    "website": "http://www.hatchyoga.com/",
    "phone": "(905) 232-2292",
    "description": "Hatch is a wonderful and welcoming studio! The instructors are lovely, varying class times and a beautiful (+clean) studio. Its a win win! Personally I love and recommend the restorative practice on Mondays at 8pm!",
    "amenities": [
      "Wifi",
      "Locker",
      "Smoothie Bar"
    ],
    "author": 
      {
        "id": "5bd5ed82075c5c1909b7d6d8",
        "username": "Lucia"
      }
    ,
    "classes": [
      "Hot Yoga",
      "Bikram Yoga",
      "Vinyasa Yoga"
    ],
    "beginners": [
      "No"
    ],
    "cost": 10,
    "location": "626 Burnhamthorpe Road West #202, Mississauga",
    "lat": 43.58023619999999,
    "lng": -79.6500332,
    "commentfeed": [
      {
        "text": "There aren't enough words to say just how amazing this Yoga studio is! If you are anything like me, a newbie to Yoga, this is the place to start. Setting aside the obvious amazing intro deal of $30 for your first month of unlimited classes, The people and staff are just as amazing. I was so nervous and shy to start this new Yoga journey in fear or not being able to do poses correctly and feeling like an outsider, but every instructor made sure that wasn't the case. They were all so friendly and encouraging I never once felt intimidated. Every class made me feel confident and proud and it made going back more and more that much easier. I'm incredibly sad that I will be moving away and won't be able to take Hatch Yoga with me, but I will definitely be returning on days I am ever back in town. If you ever look at expanding up north, be sure to let me know :) Namaste.",
        "rating": 5
      }
    ]
  },
  {
    "name": "Holistic BodyWorx",
    "image": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAIXz6sxiEFenWrgLanBIHaAuEVmOe_ooQSyLNr5BspoK-cdcfNR2zaM5F9fv4DIT3uUWxMDbYd4k3vnfBVQmuH8CM7L6t4jtNsIeI-XBez9wjrL55FCpvet52MxHz_s-HEhDIErPzW_TkLxWQ1EVidVtyGhTfYUmrCkn344XZcM9X1uKYE5r-3w&3u1024&4u1024&5m1&2e1&callback=none&key=AIzaSyDVNqmxoPpZXHe89d2y12ozPDVjoLAk4hw&token=25982",
    "rating": 4.3,
    "website": "http://www.holisticbodyworx.ca/",
    "phone": "(905) 281-3737",
    "description": "I purchased a Groupon for this studio and I'm so glad I started coming here. The Pilates classes are an amazing workout where you are pushed and motivated throughout the entire class. I only started coming here recently and within just a few classes I can feel and see results already. Very happy with this studio and I look forward to every class I attend for a new challenge!",
    "amenities": [
      "Parking",
      "Locker",
      "Wifi"
    ],
    "author": 
      {
        "id": "5bd5eccd075c5c1909b7d6d6",
        "username": "Alice"
      }
    ,
    "classes": [
      "Hot Yoga",
      "Bikram Yoga",
      "Vinyasa Yoga"
    ],
    "beginners": [
      "No"
    ],
    "cost": 20,
    "location": "1, 4259 Sherwoodtowne Boulevard, Mississauga",
    "lat": 43.6009576,
    "lng": -79.639814,
    "commentfeed": [
      {
        "text": "I love attending classes at Holistic BodyWorx. The entire team from reception, to the various instructors and Tina and Roy are wonderful! Very friendly and informative!\nI really appreciate that they respect the time and effort of those who show up on time! When people are late it disrupts class so I'm thrilled they do not permit people to enter class after the class has started - very much appreciated.\nI've been going for about 2 years and the classes are great- a lot of variety from various types of yoga, pilates (both classic and a combination class which incorporates a little cardio) and body sculpt! I love them all :)",
        "rating": 5
      }
    ]
  },
  {
    "name": "Parivartan Mississauga Hot Yoga Studio",
    "image": "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAAx-nmDnsNWLVb9UZPeHdXF4-3GAOmkj2nE6sbdyKq7m7IGiYPbKI2Mjl2mUWGjaVaaL7Eg_ap3NI_HaMJhKtAkDk0IGwWDlxWYk-Ga5zuS7YQC8kr-bCks50MsNeUF56sEhC1MskcB4BPtQEhuDsaeXdLGhRhJuPLJEmixOrF6rbu180jllgA6w&3u1024&4u1024&5m1&2e1&callback=none&key=AIzaSyDVNqmxoPpZXHe89d2y12ozPDVjoLAk4hw&token=62238",
    "rating": 4.3,
    "website": "http://www.parivartanyoga.com/",
    "phone": "(905) 897-8680",
    "description": "Really great place to begin or continue advancing your practice. Classes available for all levels. Teachers are very patient and knowledgeable offering a myriad of variations depending on student ability. I have been to  two classes so far and I’m really excited and inspired to continue going as long as I live in this area. \n\nThe studio is really clean and well maintained. The owner Michelle is very responsive and will address any concerns escalated to her in a very urgent, prompt and sincere way! 5 stars for Parivartan 🕉.",
    "amenities": [
      "Wifi",
      "Locker",
      "Smoothie Bar"
    ],
    "author": 
      {
        "id": "5bd5ed82075c5c1909b7d6d8",
        "username": "Lucia"
      }
    ,
    "classes": [
      "Hatha Yoga",
      "Bikram Yoga",
      "Vinyasa Yoga"
    ],
    "beginners": [
      "Yes"
    ],
    "cost": 10,
    "location": "350 Burnhamthorpe Road East #5A, Mississauga",
    "lat": 43.6003902,
    "lng": -79.62605280000002,
    "commentfeed": [
      {
        "text": "Has been my favourite studio for the past 8 years. Amazing, relaxed atmosphere, great instructors. The owner is awesome!!! Thank you Michelle for running this great studio at very competitive pricing ☺",
        "rating": 5
      }
    ]
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
        Comment.create({
          text: seed.commentfeed[0].text,
          rating: seed.commentfeed[0].rating,
          author: {
            id: seed.author.id, //"5bd5e502075c5c1909b7d6ca"
            username: seed.author.username //"Alex"
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