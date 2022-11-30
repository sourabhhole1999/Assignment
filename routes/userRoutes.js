const express=require('express');
const router=express.Router();
const {registration,login}=require('../controller/users')

router.get("/",(req,res)=>{
    res.render("user");
})

router.get("/welcome/:id",(req,res)=>{
    let email = req.params.id;
    res.render("welcome",{email:email})
})
router.get("/login",(req,res)=>{
    res.render("login")
})
router.get("/register",(req,res)=>{
    res.render("regis")
})

router.post('/postData',registration);
router.post('/postLogin',login);
module.exports=router;