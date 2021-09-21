var express = require('express');
var router = express.Router();
var md5 = require('md5');
var mysql = require('mysql');

var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "cmc"
});

router.get("/",function(req,res,next){
    var val = md5("ahb");

        if(err) throw err;
        con.query("SELECT * FROM user",function(err,result,fields){
            if (err) throw err;
    
            console.log(result);
            res.send(result);
    
        });

    
});

module.exports = router;