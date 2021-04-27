const express = require("express");
const router = express.Router();
const leave = require("../models/leave");

router.get("/view/pending/:email", async (req, res) => {
  try {
    const leaveApplications = await leave.find({ email: req.params.email });
    res.json({ leaveApplications });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/view/pending", async (req, res) => {
  try {
    const leaveApplications = await leave.find({ status: "pending" });
    res.json({ leaveApplications });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/approve/:id", async (req, res) => {
  try {
    const leaveApplications = await leave.findOneAndUpdate(
      { leaveID: req.params.id },
      { status: "approved" },
      { new: true }
    );
    res.json({ leaveApplications });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/approved/:id", async (req, res) => {
  try {
    const leaveApplications = await leave.find({
      status: "approved",
      email: req.params.id,
    });
    res.json({ leaveApplications });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
