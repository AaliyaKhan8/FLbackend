var express=require('express');
var router=express.Router();
var authcontroller=require('./authcontroller');
router.post('/login',function(req,res){

})
router.post('/register',function(req,res){
     authcontroller.register(req,res);
})



module.exports=router;