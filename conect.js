let mysql= require('mysql');
let con = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:"reviews_db"
    }
);
con.connect(function(err){
    if(err){throw err;}
    console.log("Connected successfully");
});
module.exports = con;