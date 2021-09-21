var express = require('express');
var router = express.Router();

//database connection
var con = require('./DBConnect').connect();

var t_uid = 2;

router.get("/",function(req,res,next){
    console.log(res.body);

    var sql = "";

    if(req.query.search){
        sql = "SELECT  `sid`, CAST(s.date AS varchar(100)) AS date, u.fname, u.lname,marks FROM submission s,user u WHERE assID="+ req.query.assID +" AND u.uid=s.uid AND (u.fname LIKE '%"+req.query.search+"%' OR u.lname LIKE '%"+req.query.search+"%') ORDER BY date DESC";
    }else{
        sql = "SELECT `sid`, CAST(s.date AS varchar(100)) AS date, u.fname, u.lname,marks FROM submission s,user u WHERE assID=" + req.query.assID + " AND u.uid=s.uid ORDER BY date DESC";
    }

    con.query(sql,function(err,result,fields){
        console.log(sql);
        if (err) throw err;
    
        console.log(result);
            //res.download('upload/assignment/413edd89e31f7c0ac367c2c4e4d584f2.mkv');
        res.send(result);
    
    });
    
});

module.exports = router;
