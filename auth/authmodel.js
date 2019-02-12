var mongooose=require('mongoose');
var schema=new mongooose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    }
})
var model=('users',schema);
module.exports=model;