require('dotenv').config();

var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    cookieParser = require("cookie-parser"),
    LocalStrategy = require("passport-local"),
    flash = require("connect-flash"),
    Yoga = require("./models/yoga"),
    Favorites = require("./models/favorites"),
    Comment = require("./models/comment"),
    User = require("./models/user"),
    session = require("express-session"),
    seedDB = require("./seeds"),
    methodOverride = require("method-override");

//requiring routes
var commentRoutes = require("./routes/comments"),
    yogaRoutes = require("./routes/yoga"),
    indexRoutes = require("./routes/index")

mongoose.connect("mongodb://localhost:27017/yelp_camp_v6", {
    useNewUrlParser: true
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));
app.use(cookieParser('secret'));


seedDB(); //seed the database//Suganthi


app.locals.moment = require('moment');
// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Juniper wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});


app.use("/", indexRoutes);
app.use("/yoga", yogaRoutes);
app.use("/yoga/:id/comments", commentRoutes);

<<<<<<< HEAD
app.listen(3000, function(){
   console.log("Our Yoga Server Has Started!");
});

=======
app.listen(3000, function () {
    console.log("Our Yoga Server Has Started!");
});
>>>>>>> c2e9e25fbd8afb8fb22ab0f9498c1ed77095c8d8
