const express = require("express");
const router = express.Router();
const student_profile = require("../models/student_profile");

router.get("/", async (req, res) => {
  try {
    const student = await student_profile.find();
    res.json({ student });
  } catch (err) {
    res.json({ student: "student not found" });
  }
});

router.get("/stream/:stream", async (req, res) => {
  let student;
  try {
    student = await student_profile.find({
      "class.stream": req.params.stream,
    });
    //  const name = student;
    res.json({ student });
  } catch (err) {
    res.json({ student: "student not found" });
  }
});

router.get("/email/:id", async (req, res) => {
  try {
    const student = await student_profile.find({ email: req.params.id });
    res.json({ student });
  } catch (err) {
    res.json({ student: "student not found" });
  }
});

module.exports = router;
