var express = require('express');
var router = express.Router();

//database connection
var con = require('./DBConnect').connect();

var t_uid = 2;

router.get("/",function(req,res,next){
    
    var sql = "SELECT * FROM assignment WHERE assID=" + req.query.id +" AND uid=" + t_uid;
    
    con.query(sql,function(err,result,fields){

        if (err) throw err;
    
        console.log(result);
        res.send(result);
    
    });
    
});

module.exports = router;