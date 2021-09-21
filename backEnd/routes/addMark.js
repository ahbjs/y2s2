var express = require('express');
var router = express.Router();

//database connection
var con = require('./DBConnect').connect();

var t_uid = 2;

router.get("/",function(req,res,next){
    
    var sql = "UPDATE submission SET marks=" + req.query.marks + " WHERE sid=" + req.query.sid;
    console.log(sql);
    con.query(sql,function(err,result,fields){

        if (err) throw err;
    
        console.log(result);
        res.send("1");
    
    });
    
});

module.exports = router;