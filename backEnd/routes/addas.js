//Add assignment backend
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
const multer = require('multer');
var fs = require('fs');

//database connectiond fd 
var con = require('./DBConnect').connect();

var t_uid = 2;

router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

const upload = multer({ dest: './upload/assignment/' });

router.post("/",upload.single("file"),function(req,res,next){
    console.log("add!!!");
    let file_save_as = req.file.path + (req.file.originalname).substr((req.file.originalname).lastIndexOf("."));
    console.log(file_save_as);
    
    fs.rename(req.file.path,file_save_as, function (err) {
      if (err) throw err;

      //get current date
      const d = new Date();
      const date = d.getFullYear() +"-"+ (d.getMonth()+1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

      var sql = "INSERT INTO assignment VALUES(0,'"+date+"','"+file_save_as+"','"+req.body.title+"','"+req.body.deadline+"','"+req.body.description+"',"+t_uid+")";

      con.query(sql,function(err,result){
            
          if (err){
            res.send("0");
            throw err;
          } 

          res.send("1");
        
      });

    });
    console.log(req.file);
});

module.exports = router;