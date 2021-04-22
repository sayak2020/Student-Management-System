const express = require("express");
const router = express.Router();
const student_profile = require("../models/student_profile");



router.get("/", async (req,res) =>{
    try {
       const student = await student_profile.find();
        res.json({ student });
      } catch (err) {
        res.json({ student: "student not found" });
      }
})









module.exports = router;