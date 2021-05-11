const express = require("express");
const router = express.Router();

router.get("/", (req, res)=> {
    console.log(req.cookies)
    res.send("from backend")
})



module.exports = router;