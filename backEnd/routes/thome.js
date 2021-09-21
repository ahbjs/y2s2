var express = require('express');
var router = express.Router();

//database connection
var con = require('./DBConnect').connect();

var t_uid = 2;

router.get("/",function(req,res,next){

    con.query("SELECT (SELECT COUNT(e.cid) FROM class c,enroll e WHERE c.cid=e.cid AND c.uid="+t_uid+") AS student ,\
        (SELECT COUNT(assID) FROM assignment WHERE uid="+t_uid+") AS assignment ,\
        (SELECT COUNT(aid) FROM announcement WHERE uid="+t_uid+") AS announcement ,\
        (SELECT COUNT(s.sid) FROM assignment a,submission s WHERE a.assID = s.assID AND a.uid="+t_uid+") AS submission",function(err,result,fields){

        if (err) throw err;
    
        console.log(result);
        res.send(result);
    
    });
    
});

module.exports = router;