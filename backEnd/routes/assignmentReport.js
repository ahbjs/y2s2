var express = require('express');
var router = express.Router();

var pdf = require("pdf-creator-node");
var fs = require("fs");

//database connection
var con = require('./DBConnect').connect();

var template = "routes/reportTemplate.html";

var html = fs.readFileSync(template, "utf8");

var t_uid = 2;

router.get("/",function(req,res,next){
    console.log(res.body);

    var sql = "";

    sql = "SELECT `sid`, CAST(s.date AS varchar(100)) AS date, u.fname, u.lname,IF(marks != -1,marks,'Not Marked') AS marks,a.title,CAST(a.date AS varchar(100)) AS apdate FROM submission s,user u,assignment a WHERE s.assID=" + req.query.assID + " AND u.uid=s.uid AND s.assID=a.assID AND a.uid="+t_uid+" ORDER BY s.date DESC";
    
    con.query(sql,function(err,result,fields){
        console.log(sql);
        if (err) throw err;
    
        console.log(result);

        var options = {
            format: "A3",
            orientation: "portrait",
            border: "7mm",
            footer: {
                height: "0mm",
                contents: {
                    first: '',
                    2: 'Second page', // Any page number is working. 1-based index
                    default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
                    last: ''
                }
            }
        };

        var inData = result;

        var document = {
            html: html,
            data: {
                inData: inData,
                title: result[0].title,
                apdate: result[0].apdate,
                total: result.length,
            },
            path: "./upload/submission/report/assignment_report.pdf",
            type: "",
        };

        pdf.create(document, options)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.error(error);
            });

            //res.download('upload/assignment/413edd89e31f7c0ac367c2c4e4d584f2.mkv');
        res.download('./upload/submission/report/assignment_report.pdf');
        res.status(200);
    
    });
    
});

module.exports = router;
