var express = require('express');
var router = express.Router();

//database connection
var con = require('./DBConnect').connect();

router.get("/",function(req,res,next){
    console.log(req.query);
   
    var sql = "";

    if(req.query.fileType == "s"){
        sql = "SELECT file FROM submission WHERE sid=" + req.query.id;
    }else if(req.query.fileType == "l"){
        res.download("routes/lib/img/logo.png");
        return 0;
    }else{
        sql = "SELECT file FROM assignment WHERE assID=" + req.query.id;
    }

    con.query(sql,function(err,result,fields){
            
        console.log(sql);
        if (err) throw err;
    
        console.log(result);
        console.log(result[0].file);

        res.download(result[0].file);
        res.status(200);

    });
    
});

module.exports = router;
