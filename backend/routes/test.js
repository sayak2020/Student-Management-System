const express = require("express");
const router = express.Router();
const test = require("../models/test");

router.post("/", async (req, res) => {
  const newtest = new test({
    name: req.body.name,
    subject: req.body.subject,
    questions: req.body.questions,
  });
  try {
    const fb = await newtest.save();
    res.status(201).json(fb);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const testDetails = await test.find({ testID: req.params.id });
    res.json({ testDetails });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/endTest/:id", async (req, res) => {
  try {
    const newtest = await test.findOneAndUpdate(
      { testID: req.params.id },
      { status: "ENDED" },
      { new: true }
    );
    res.json({ newtest });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get("/test/live", async (req, res) => {
  try {
    const testDetails = await test.find({ status: "LIVE" });
    res.json({ testDetails });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get("/test/ended", async (req, res) => {
  try {
    const testDetails = await test.find({ status: "ENDED" });
    res.json({ testDetails });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
