const express = require("express");
const router = express.Router();
const attendence = require("../models/attendence");

router.get("/:email",async (req,res) => {
    try {
        const student_attd = await attendence.find({email: req.params.email});
         res.json({ student_attd });
       } catch (err) {
         res.json({ student_attd: "No attendence found" });
       }
})

router.get("/",async (req,res) => {
    try {
        const student_attd = await attendence.find();
         res.json({ student_attd });
       } catch (err) {
         res.json({ student_attd: "No attendence found" });
       }
})

router.get("/view/by/date/:date",async (req,res) => {
    try {
        const student_attd = await attendence.find({date: req.params.date});
         res.json({ student_attd });
       } catch (err) {
         res.json({ student_attd: "No attendence found" });
       }
})

router.get("/:date/:sub",async (req,res) => {
    try {
        const student_attd = await attendence.find({date: req.params.date,subject: req.params.sub});
         res.json({ student_attd });
       } catch (err) {
         res.json({ student_attd: "No attendence found" });
       }
})

router.get("/ed/:email/:date",async (req,res) => {
    try {
        const student_attd = await attendence.find({email: req.params.email, date:req.params.date});
         res.json({ student_attd });
       } catch (err) {
         res.json({ student_attd: "No attendence found" });
       }
})



module.exports = router;
