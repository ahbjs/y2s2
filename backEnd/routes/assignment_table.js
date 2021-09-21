var express = require('express');
var router = express.Router();

//database connection
var con = require('./DBConnect').connect();

var t_uid = 2;

router.get("/",function(req,res,next){
    console.log(res.body);

    var sql = "";

    if(req.query.search){
        sql = "SELECT  `assID`, CAST(date AS varchar(100)) AS date, `file`, `title`, CAST(deadline AS varchar(100)) AS deadline, `description`, `uid` FROM assignment WHERE uid="+ t_uid +" AND title LIKE '%"+req.query.search+"%' ORDER BY date DESC";
    }else{
        sql = "SELECT `assID`, CAST(date AS varchar(100)) AS date, `file`, `title`, CAST(deadline AS varchar(100)) AS deadline, `description`, `uid` FROM assignment WHERE uid=" + t_uid + " ORDER BY date DESC";
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
