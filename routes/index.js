var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
var NodeGeocoder = require('node-geocoder');
var multer = require('multer');
var morgan = require('morgan');
var bodyParser = require("body-parser");
var crypto = require("crypto");
var PORT = 3000;


// https://alligator.io/nodejs/uploading-files-multer-express/

router.use(express.static("public"));
router.use(bodyParser.urlencoded({
    extended: true
}));

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg');
    }
});

let upload = multer({
    storage: storage
});

router.post('/fileupload', upload.single('image'), (req, res) => {
    const host = req.hostname;
    const filePath = req.protocol + "://" + host + ':' + PORT + '/images/uploads/' + req.file.filename;
    console.log(req.file.filename);
    console.log(filePath);

    res.json({
        url: filePath
    });
});

var options = {
    provider: 'google',
    httpAdapter: 'https',
    apiKey: process.env.GEOCODER_API_KEY,
    formatter: null
};

var geocoder = NodeGeocoder(options);

//root route
router.get('/', function (req, res) {
    res.render('landing');
});

// show register form
router.get('/register', function (req, res) {
    res.render('register');
});

//handle sign up logic
router.post('/register', function (req, res) {

    geocoder.geocode(req.body.home, function (err, data) {
        if (err || !data.length) {
            console.log(err);
            req.flash('error', 'Invalid home address');
            return res.redirect('back');
        }

        var latValue = data[0].latitude;
        var lngValue = data[0].longitude;
        var formattedAddress = data[0].formattedAddress;

        var newUser = new User({
            username: req.body.username,
            home: formattedAddress,
            email: req.body.email,
            lat: latValue,
            lng: lngValue,
            photo: req.body.url
        });

        User.register(newUser, req.body.password, function (err, user) {
            if (err) {
                console.log(err);
                req.flash('error', err.message);
                return res.render('register');
            }
            passport.authenticate('local')(req, res, function () {
                req.flash(
                    'success',
                    'Successfully Signed Up! Nice to meet you ' + req.body.username
                );
                res.redirect('/yoga');
            });
        });
    });
});

//show login form
router.get('/login', function (req, res) {
    res.render('login');
});

//handling login logic
router.post(
    '/login',
    passport.authenticate('local', {
        successRedirect: '/yoga',
        failureRedirect: '/login'
    }),
    function (req, res) {}
);

// logout route
router.get('/logout', function (req, res) {
    req.logout();
    req.flash('success', 'LOGGED YOU OUT!');
    res.redirect('/yoga');
});

module.exports = router;