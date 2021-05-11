const express = require("express");
const router = express.Router();
const test = require("../models/test");
const test_respons = require("../models/test_respons");

router.post("/:userID/:email/:id", async (req, res) => {
  const testdetails = await test.findOne({ testID: req.params.id });
  const ques = testdetails.questions;
  let marks = [],
    ans_given = [],
    i = 0,
    total,
    marks_obtained = 0;
  const ans_received = req.body.answers;
  // const ans_received = ["A","a"];

  ques.forEach((ques) => {
    marks[i] = ques.marks;
    ans_given[i] = ques.ans;
    i += 1;
  });

  for (i = 0; i < ans_given.length; i++) {
    if (ans_given[i] === ans_received[i]) {
      marks_obtained += marks[i];
    }
  }

  const add = (arr) => marks.reduce((a, b) => a + b, 0);
  total = add(marks);
  console.log(marks_obtained);
  console.log(marks);
  console.log(ans_given);

  const newrespons = new test_respons({
    testID: req.params.id,
    name: testdetails.name,
    subject: testdetails.subject,
    student_email: req.params.email,
    studentID: req.params.userID,
    answer: req.body.answers,
    totalmarks: total,

    obtainedmarks: marks_obtained,
  });
  try {
    const fb = await newrespons.save();
    res.status(201).json(fb);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/testID/:id", async (req, res) => {
  try {
    const testDetails = await test_respons.find({ testID: req.params.id });
    res.json({ testDetails });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/user/:email", async (req, res) => {
  try {
    const testDetails = await test_respons.find({
      student_email: req.params.email,
    });
    res.json({ testDetails });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
