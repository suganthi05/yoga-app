var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
var NodeGeocoder = require('node-geocoder');

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
            lng: lngValue
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