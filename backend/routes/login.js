require("dotenv").config();
const express = require("express");
const router = express.Router();
const Login = require("../models/login");
const bodyParser = require("body-parser");

const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
router.use(bodyParser.json());
// router.use(session({
//     secret: 'Our secret',
//     resave: true,
//     saveUninitialized: true
// }));

// router.use(passport.initialize());
// router.use(passport.session());

passport.use(Login.createStrategy());

passport.serializeUser(function (Login, done) {
  return done(null, Login.id);
});
passport.deserializeUser(function (id, done) {
  Login.findById(id, function (err, Login) {
    return done(err, Login);
  });
});

const LocalStrategy = require("passport-local").Strategy;
passport.use(new LocalStrategy(Login.authenticate()));

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:9000/login/auth/google/secrets",
    },
    function (accessToken, refreshToken, profile, cb) {
      Login.findOrCreate(
        {
          googleId: profile.id,
          username: profile.emails[0].value,
          name: profile.name.givenName + " " + profile.name.familyName,
        },
        function (err, user) {
          return cb(err, user);
        }
      );
    }
  )
);
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/auth/google/secrets",
  passport.authenticate("google", { failureRedirect: "/auth/google" }),
  function (req, res) {
    // Successful authentication, redirect home.
    //var sess = req.session;
    //sess.username = profile.emails[0].value;
    //res.end('done');
    console.log(req.user);
    res.json({ userid: req.user.id, username: req.user.username });
    //res.redirect("http://localhost:3000/welcome");
  }
);

router.post("/register", function (req, res) {
  Login.register(
    { username: req.body.username, name: req.body.name },
    req.body.password,

    function (err, user) {
      if (err) {
        res.redirect("/login");
      } else {
        passport.authenticate("local")(req, res, function () {
          res.send("1");
        });
      }
    }
  );
});

router.post("/login", function (req, res) {
  const user = new Login({
    username: req.body.username,
    password: req.body.password,
  });
  req.login(user, function (err) {
    if (err) {
      res.redirect("/login");
    } else {
      passport.authenticate("local")(req, res, function () {
        var string = encodeURIComponent("logged in");

<<<<<<< HEAD
        res
          .status(200)
          .json({ userid: req.user.id, username: req.user.username });
=======
        res.status(200).json({userid:req.user.id, username:req.user.username});
>>>>>>> 9d862c74c6b1b97d50469d23704f0c0838970a64
      });
    }
  });
});

router.get("/ses", function (req, res) {
  var sess = req.session;
  /*
   * Here we have assigned the 'session' to 'sess'.
   * Now we can create any number of session variables we want.
   * in PHP we do as $_SESSION['var name'].
   * Here we do like this.
   */
  //sess.email; // equivalent to $_SESSION['email'] in PHP.
  res.json({ session: req.session.user }); // equivalent to $_SESSION['username'] in PHP.
});

router.get("/logout", function (req, res) {
  req.logout();
  res.clearCookie("userid");
  res.clearCookie("username");
<<<<<<< HEAD
  res.redirect("http://localhost:3000/");
=======
  res.redirect("/");
>>>>>>> 9d862c74c6b1b97d50469d23704f0c0838970a64
});

router.get("/sess", (req, res) => {
  const sess = req.user.username;
  res.json(req.session);
  res.redirect("/student_profile");
});

// const SESSION = session;
// module.exports = SESSION
module.exports = router;
