var mysql = require('mysql');
var bodyparser=require('body-parser');
var express=require('express');
var authrouter=require('./auth/authroutes');
var app=express();
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended:true
}))
app.use('/auth',authrouter);





app.listen(3000);