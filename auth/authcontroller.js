var mysql = require('mysql');
var bcrypt=require('bcryptjs');
exports.register=function(req,res){

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database:"test"
      });
      
      var data={
        "name":req.body.name,
        "mailid":req.body.email,
        "password":bcrypt.hashSync(req.body.password),
        "phonenumber":req.body.phonenumber,

    }

      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql="INSERT INTO `user` SET?"
        con.query(sql,data, function (err, result) {
            if (err) throw err;
            console.log(result);
          });
      }); 

}