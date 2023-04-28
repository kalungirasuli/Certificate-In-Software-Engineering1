const express=require('express');
const router=express.Router();

//this the imported models
const Register=require('../models/register');

//This is the route for the register form 
router.get('/register',(req,res)=>{
    res.render('register');
})
router.post('/register',async(req,res)=>{
    try{
        const reg= new Register(req.body);
        await reg.save();
        res.redirect('/register');
    }
    catch(err){
        res.status(400).send('Sorry! Something went wrong');
        console.log(err);
    }
   


})
module.exports=router;