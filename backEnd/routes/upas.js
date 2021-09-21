//Add assignment backend
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
const multer = require('multer');
var fs = require('fs');

//database connection
var con = require('./DBConnect').connect();

var t_uid = 2;

router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

const upload = multer({ dest: './upload/assignment/' });

router.post("/",upload.single("file"),function(req,res,next){
    console.log("as");
    if(req.file.originalname != "empty"){
        
        //get current file and delete it
        if(req.body.assID != ""){
            var sqlCurrntFile = "SELECT file FROM assignment WHERE assID="+req.body.assID;
        
            con.query(sqlCurrntFile,function(err,result){
                        
                if (err){
                    res.send("2");
                    throw err;
                } 
        
                console.log(result);
        
                fs.unlink(result[0].file, function (err) {
                    if (err) throw err;
                    console.log('File deleted! '+ result[0].file);
                });
                    
            });
        }

        //renaming new file
        let file_save_as = req.file.path + (req.file.originalname).substr((req.file.originalname).lastIndexOf("."));
        console.log("save as - "+file_save_as);
        
        fs.rename(req.file.path,file_save_as, function (err) {
            if (err) throw err;
        });
        
        var sql = "UPDATE assignment SET file='"+file_save_as+"',title='"+req.body.title+"',deadline='"+req.body.deadline+"',description='"+req.body.description+"' WHERE assID=" + req.body.assID + " AND uid=" + t_uid;
    }else{
        var sql = "UPDATE assignment SET title='"+req.body.title+"',deadline='"+req.body.deadline+"',description='"+req.body.description+"' WHERE assID=" + req.body.assID + " AND uid=" + t_uid;
    }

    con.query(sql,function(err,result){
            
        if (err){
            res.send("0");
            throw err;
        } 

        res.send("1");
        
    });

    console.log(req.file);

});

module.exports = router;