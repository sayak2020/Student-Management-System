require('dotenv').config();
const express = require('express');
const router = express.Router();
const Login = require('../models/login');

const session = require('express-session');
const passport=require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

router.use(session({
    secret: 'Our secret',
    resave: false,
    saveUninitialized: false
}));

router.use(passport.initialize());
router.use(passport.session());

passport.use(Login.createStrategy());

passport.serializeUser( function (Login, done) {
    return done(null, Login.id);
  });
passport.deserializeUser(function (id, done) {
   Login.findById(id, function(err, Login) {
    return done(err, Login);
   });
});

const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(Login.authenticate()));

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/login/auth/google/secrets"
  },
  function(accessToken, refreshToken, profile, cb) {
    Login.findOrCreate({ googleId: profile.id, username: profile.emails[0].value }, function (err, user) {
      return cb(err, user);
    });
  }
));
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] })
);
router.get('/auth/google/secrets', 
  passport.authenticate('google', { failureRedirect: '/auth/google' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/users');
});




router.post("/register",function(req,res){
    Login.register({username:req.body.username},req.body.password, function(err, user) {
        if(err)
        {
            res.redirect("/login");
        }else
        {
            passport.authenticate("local")(req,res,function(){
                res.redirect("/user");
            });
        }
    });
});

router.post("/login",function(req,res){
    const user=new Login({
        username:req.body.username,
        password:req.body.password
    });
    req.login(user,function(err){
        if(err == 'Unauthorized')
        {
            res.redirect('/login');
        }
        else
        {
            passport.authenticate("local")(req,res,function(){
              var string = encodeURIComponent('logged in');
                
                res.redirect('/user');
               
                
            });
        }
    });
});


router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });


module.exports = router;