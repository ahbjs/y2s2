exports.connect = function () {

    var mysql = require('mysql');

    var con = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "",
        database : "cmc"
    });

    return con;
}; 