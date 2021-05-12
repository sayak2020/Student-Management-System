const express = require("express");
const router = express.Router();
const Login_a = require("../../models/admin_login");
const passport = require("passport");
const bodyParser = require("body-parser");
router.use(bodyParser.json());

// router.use(passport.initialize());
// router.use(passport.session());

const LocalStrategy = require("passport-local").Strategy;
passport.use("admin", new LocalStrategy(Login_a.authenticate()));

//passport.use("admin", Login_a.createStrategy());

passport.serializeUser(function (Login_a, done) {
  return done(null, Login_a.id);
});

passport.deserializeUser(function (id, done) {
  Login_a.findById(id, function (err, Login_a) {
    return done(err, Login_a);
  });
});

router.post("/a/a_register", function (req, res) {
  Login_a.register(
    { username: req.body.username, name: req.body.name },
    req.body.password,

    function (err, user) {
      if (err) {
        res.send("Already registered the admin");
      } else {
        passport.authenticate("admin")(req, res, function () {
          res.send("Registration Success");
        });
      }
    }
  );
});

router.post("/a/a_login", function (req, res) {
  const user = new Login_a({
    username: req.body.username,
    password: req.body.password,
  });

  req.login(user, function (err) {
    if (err) {
      res.json({ message: err.message });
    } else {
      passport.authenticate("admin")(req, res, function () {
        console.log(req.user.id)
        res.status(200).json({ adminID : req.user.id});
      });
    }
  });
});

router.get("/a/a_logout", function (req, res) {
  req.logout();
  res.clearCookie("adminID");
  res.redirect("http://localhost:3000/");
});

module.exports = router;
