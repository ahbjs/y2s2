var express = require('express');
var router = express.Router();
var fs = require('fs');

//database connection
var con = require('./DBConnect').connect();

var t_uid = 2;

router.get("/",function(req,res,next){
    
    var sql = "SELECT sid,file FROM submission WHERE assID=" + req.query.assID;
    
    con.query(sql,function(err,result,fields){

        if (err) throw err;
    
        console.log(result);
        
        var delSql = "";

        result.map((data) => {
            
            delSql = "DELETE FROM submission WHERE sid="+data.sid;

            fs.unlink(data.file, function (err) {
                if (err) throw err;
                console.log('File deleted! '+ data.file);
            });

            con.query(delSql);

        });
    
    });

    var sqlAs = "SELECT assID,file FROM assignment WHERE assID=" + req.query.assID;
    
    con.query(sqlAs,function(err,result,fields){

        if (err) throw err;
    
        console.log(result);
        
        var delSql = "";

        result.map((data) => {
            
            delSql = "DELETE FROM assignment WHERE assID="+data.assID;

            fs.unlink(data.file, function (err) {
                if (err) throw err;
                console.log('File deleted! '+ data.file);
            });

            con.query(delSql);
            
        });
        res.send("1");
    });
    
});

module.exports = router;