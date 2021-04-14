const express = require("express");
const router = express.Router();
//const session = require('express-session');
//const passport=require("passport");
const session1 = require("./login").SESSION;
//router.use(passport.initialize());
//router.use(passport.session());

const student_profile = require("../models/student_profile");

// router.use(session({
//     secret: 'Our secret',
//     resave: true,
//     saveUninitialized: true
// }));

// router.get('/',  async (req,res) =>{
//     let student = await student_profile.findOne({'email': req.user.username});
//     if(student==null)
//     {
//      const student = new student_profile({
//             email: req.user.username,
//             userid: req.user.id,

//         });
//         try{
//             const newstudent = await student.save();
//             res.status(201).json(newstudent);

//         } catch (err) {
//             res.status(400).json({message: err.message});

//         }

//     }

//     console.log('student_profile')
// })
router.get("/", async (req, res) => {
  const student = new student_profile({
    //email: req.user.username,
    userid: req.user.id,
    email: req.user.username,
  });
  try {
    const newstudent = await student.save();
    // res.status(201).json(newstudent);
    res.student = newstudent;
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    student = await student_profile.findOne({ userid: req.params.id });
    res.json({ student });
  } catch (err) {
    res.json({ student: "student not found" });
  }
});
//try {

// const student = new student_profile({
//   //email: req.user.username,
//   userid: req.params.id,
//   // email: req.user.username,
// });
//   try {
//     const newstudent = await student.save();
//     // res.status(201).json(newstudent);
//     //res.student = newstudent;
//     res.json({ newstudent });
//     console.log(newstudent);
//     //  next();
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
//   res.json({ message: err.message });
// }

router.patch("/update/:id/:email", getStudent, async (req, res) => {
  //res.student.userid= req.user.id;
  // const email= req.user.username;
  // res.student.email = email;
  // console.log(email);

  if (req.body.name != null) {
    res.student.name = req.body.name;
  }
  if (req.body.phone != null) {
    res.student.phone = req.body.phone;
  }
  if (req.body.stream != null) {
    res.student.class.stream = req.body.stream;
  }
  if (req.body.section != null) {
    res.student.class.section = req.body.section;
  }
  if (req.body.year != null) {
    res.student.class.year = req.body.year;
  }
  if (req.body.street != null) {
    res.student.address.street = req.body.street;
  }
  if (req.body.city != null) {
    res.student.address.city = req.body.city;
  }
  if (req.body.pin != null) {
    res.student.address.pin = req.body.pin;
  }

  try {
    const updatedStudent = await res.student.save();
    res.json(updatedStudent);
  } catch (err) {
    res.json({ message: err.message });
  }
});

async function getStudent(req, res, next) {
  // getsubscriber works as a middle wear
  let student;
  try {
    student = await student_profile.findOne({ userid: req.params.id });
    console.log(student);
    if (res.student != null) {
      res.student = student;
      next();
    }
  } catch (err) {
    //return res.status(404).json({message: 'Cannot find student'});
    const student = new student_profile({
      //email: req.user.username,
      userid: req.params.id,
      email: req.params.email,
    });
    try {
      const newstudent = await student.save();
      // res.status(201).json(newstudent);
      res.student = newstudent;
      next();
    } catch (err) {
      res.status(400).json({ message: err.message });
    }

    // res.status(500).json({ message: err.message });
  }
  //   res.student = student;
  // res.json(subscriber.name);
  //next();
}

module.exports = router;
