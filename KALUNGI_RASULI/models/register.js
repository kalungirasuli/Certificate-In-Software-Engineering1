const mongoose=require('mongoose');
//this the register schema
const RegisterSchema=mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    dateOfbirth:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    town:{
        type:String,
        required:true
    },
    zip:{
        type:String,
        required:true
    },
    phoneNumber1:{
        type:String,
        required:true
    },
    phoneNumber2:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
})

//this exports the schema
module.exports=mongoose.model('register',RegisterSchema);