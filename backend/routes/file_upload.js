var express = require('express')
const router = express.Router();
var imgModel = require('../models/image');
var multer = require('multer');
//const upload = multer({ dest: "uploads/" });




var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({ storage: storage });

router.get('/', async (req, res) => {
    try{
          const files = await imgModel.find();
          res.send(files)
    }
    catch(err){
        res.send(err);
    }
  
});


router.post('/notes', upload.single('file'), (req, res, next) => {
 

//     var obj = {
//         //name: req.body.name,
//         //desc: req.body.desc,
//         //file:req.file,
//      }  
//      console.log(req.file)
// imgModel.create(obj, (err, item) => {
//         if (err) {
//             console.log(err);
//        }
//         else {
//              //item.save();
//            res.redirect('/');
//         }
//     });
    if(err){
        res.status(500)
    }
    else{
        res.send(req.file)
    }
});

module.exports = router;