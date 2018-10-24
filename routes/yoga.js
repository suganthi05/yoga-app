var express = require("express");
var router = express.Router();
var Yoga = require("../models/yoga");
var Favorites = require("../models/favorites");
var middleware = require("../middleware");
var NodeGeocoder = require('node-geocoder');

var options = {
    provider: 'google',
    httpAdapter: 'https',
    apiKey: process.env.GEOCODER_API_KEY,
    formatter: null
};

var geocoder = NodeGeocoder(options);

//AA- Start
router.get("/getallstudios", function (req, res) {
    Yoga.find({}, function (err, allYoga) {
        if (err) {
            console.log(err);
        } else {
            res.json(allYoga);
        }
    });
});


router.get("/getfavorites", middleware.isLoggedIn, function (req, res) {

    //console.log(req.user._id);
    Favorites.find({
        user_id: req.user._id //this user is loggedin
    }, function (err, allfav) { //this will collect all the favs of the logged-in user
        if (err) {
            console.log(err);
        } else {

            if (allfav.length == 0) {
                res.send("Sorry No Favorites Added for the User!");
            }
            //res.json(allfav);
            var allYoga = [];
            let total = allfav.length;
            let index = 0;

            console.log("total " + total);
            allfav.forEach(element => {
                console.log("Yoga Id: " + element.yoga_id);
                Yoga.findById(element.yoga_id, function (err, foundYoga) {
                    if (err) {
                        console.log(err);
                    } else {
                        ++index;
                        console.log("foundYoga " + foundYoga);
                        allYoga.push(foundYoga)
                        if (index == total) {
                            //res.json(allYoga);
                            fetchUserCreatedStudios(req, res, allYoga);
                        }
                    }
                });
            });

        }
    });
});

function fetchUserCreatedStudios(req, res, allYoga) {

    var authorToFind = {
        id: req.user._id,
        username: req.user.username
    };

    Yoga.find({
        author: authorToFind
    }, function (err, allYogaStudios) {

        res.render("yoga/favorites", {
            yoga: allYoga,
            allstudios: allYogaStudios
        });
    });


}

router.post("/addfavorites", function (req, res) {
    console.log(req.body.yoga_id);
    console.log(req.user._id);

    Favorites.find({
        yoga_id: req.body.yoga_id
    }, function (err, allfav) {
        if (err) {
            console.log(err);
        } else {
            if (allfav.length > 0) {
                console.log("Total count: " + allfav.length);
                var isMatchFound = false;
                allfav.forEach(element => {
                    console.log("element.user_id " + element.user_id + ", req.user._id: " + req.user._id);
                    if (element.user_id == req.user._id) {
                        isMatchFound = true;
                        console.log(isMatchFound);
                    }
                });
                if (isMatchFound) {
                    res.status(400).send("Already Added in Favorites!");
                } else {
                    insertIntoFavorites(req, res);
                }
            } else {

                insertIntoFavorites(req, res);
            }
        }
    });
});

function insertIntoFavorites(req, res) {

    var userFav = {
        user_id: req.user._id,
        yoga_id: req.body.yoga_id
    }
    Favorites.create(userFav, function (err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            console.log(newlyCreated);
            res.status(200).send("success");
        }
    });
}

//AA- end -fav

//INDEX - show and filter yoga studios
// begin - sj
router.get("/", function (req, res) {
    let noMatch = null;
    if (req.query.name_search || req.query.location_search || req.query.class_search ||
        req.query.amenities_search || req.query.rating_search) {

        let nameRegex, locationRegex, ratingRegex;
        // begin - sj - declared classRegex,amenitiesRegex array
        let classRegex = [];
        let amenitiesRegex = [];
        // end - sj - declared classRegex array
        if (req.query.name_search === "") {
            nameRegex = new RegExp('.*');
        } else {
            nameRegex = new RegExp(escapeRegex(req.query.name_search), 'gi');
        }

        if (req.query.location_search === "") {
            locationRegex = new RegExp('.*');
        } else {
            locationRegex = new RegExp(escapeRegex(req.query.location_search), 'gi');
        }

        // begin: sj - get the comma-seperated values, split and assign to array
        if (req.query.class_search === "select") {
            classRegex[0] = new RegExp('.*');
        } else {
            let i = 0;
            String(req.query.class_search).split(/\s*,\s*/).forEach(function (classes) {
                classRegex[i] = classes;
                i = i + 1;
            });
        }

        if (req.query.amenities_search === "select") {
            amenitiesRegex[0] = new RegExp('.*');
        } else {
            let i = 0;
            String(req.query.amenities_search).split(/\s*,\s*/).forEach(function (amenities) {
                amenitiesRegex[i] = amenities;
                i = i + 1;
            });
        }
        // end: sj - get the comma-seperated values, split and assign to array

        if (req.query.rating_search === "select") {
            Yoga.find({
                name: nameRegex,
                location: locationRegex,
                classes: {
                    '$in': classRegex  // $in option used for multiple value search
                },
                amenities:{
                    '$in': amenitiesRegex
                } 
            }, function (err, allYoga) {
                if (err) {
                    console.log('MongoDB Error:' + err);
                } else {
                    if (allYoga.length < 1) {
                        noMatch = "No yoga studio match that query, please try again.";
                    }
                    res.send({
                        yoga: allYoga,
                        noMatch: noMatch
                    });
                }
            });
        } else {
            ratingRegex = req.query.rating_search;
            Yoga.find({
                name: nameRegex,
                location: locationRegex,
                classes: {
                    '$in': classRegex  // $in option used for multiple value search for class
                },
                amenities:{
                    '$in':amenitiesRegex   // $in option used for multiple value search for amenities
                },
                rating: ratingRegex
            }, function (err, allYoga) {
                if (err) {
                    console.log(err);
                } else {
                    if (allYoga.length < 1) {
                        noMatch = "No yoga studio match that query, please try again.";
                    }
                    res.send({
                        yoga: allYoga,
                        noMatch: noMatch
                    });
                }
            });
        }
    } else {
        // Get all yoga studio from DB and render
        Yoga.find({}, function (err, allYoga) {
            if (err) {
                console.log(err);
            } else {
                res.render("yoga/index", { //res.send({
                    yoga: allYoga,
                    noMatch: noMatch
                });
            }
        });
    }
});
// end - sj - search yoga from mongoDB

//CREATE - add new campground to DB
router.post("/", middleware.isLoggedIn, function (req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var cost = req.body.cost;
    var rating = req.body.rating;
    var amenities = req.body.amenities;
    var classes = req.body.classes;
    var website = req.body.website;
    var phone = req.body.phone;
    var beginners = req.body.beginners;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    console.log("website", req.body.website)
    geocoder.geocode(req.body.location, function (err, data) {
        if (err || !data.length) {
            console.log(err);
            req.flash('error', 'Invalid address');
            return res.redirect('back');
        }
        var lat = data[0].latitude;
        var lng = data[0].longitude;
        var location = data[0].formattedAddress;
        var newYoga = {
            name: name,
            image: image,
            rating: rating,
            amenities: amenities,
            classes: classes,
            beginners: beginners,
            website: website,
            phone: phone,
            description: desc,
            author: author,
            cost: cost,
            location: location,
            lat: lat,
            lng: lng
        };
        // Create a new campground and save to DB
        Yoga.create(newYoga, function (err, newlyCreated) {
            if (err) {
                console.log(err);
            } else {
                //redirect back to campgrounds page
                console.log(newlyCreated);
                res.redirect("/yoga");
            }
        });
    });
});

//NEW - show form to create new campground
router.get("/new", middleware.isLoggedIn, function (req, res) {
    res.render("yoga/new");
});

// SHOW - shows more info about one campground
router.get("/:id", function (req, res) {
    //find the campground with provided ID
    Yoga.findById(req.params.id).populate("comments").exec(function (err, foundYoga) {
        if (err) {
            console.log(err);
        } else {
            console.log(foundYoga);
            //render show template with that campground
            res.render("yoga/show", {
                yoga: foundYoga
            });
        }
    });
});

// EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership, function (req, res) {
    Yoga.findById(req.params.id, function (err, foundYoga) {
        res.render("yoga/edit", {
            yoga: foundYoga
        });
    });
});

// UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkCampgroundOwnership, function (req, res) {
    geocoder.geocode(req.body.location, function (err, data) {
        if (err || !data.length) {
            req.flash('error', 'Invalid address');
            return res.redirect('back');
        }
        req.body.yoga.lat = data[0].latitude;
        req.body.yoga.lng = data[0].longitude;
        req.body.yoga.location = data[0].formattedAddress;

        Yoga.findByIdAndUpdate(req.params.id, req.body.yoga, function (err, yoga) {
            if (err) {
                req.flash("error", err.message);
                res.redirect("back");
            } else {
                req.flash("success", "Successfully Updated!");
                res.redirect("/yoga/" + yoga._id);
            }
        });
    });
});

// DESTROY CAMPGROUND ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership, function (req, res) {
    Yoga.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.redirect("/yoga");
        } else {
            res.redirect("/yoga");
        }
    });
});

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

module.exports = router;