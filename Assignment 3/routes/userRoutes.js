const express=require('express');
const router=express.Router();
const {register,login , details}=require('../controller/users')

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

router.get("/details",(req,res)=>{
    res.render("details")
})

router.post('/postData',register);
router.post('/postLogin',login);
router.get('/details',details);


module.exports=router;