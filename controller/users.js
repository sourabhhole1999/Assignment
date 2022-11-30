const fs = require('fs');
const registration =((req,res)=>{
    let {name,email,pass,city,age}=req.body;
    if(fs.existsSync(`./users/${email}.txt`))
    {
        res.render('regis',{errMsg:'Email Already Registerd'})
    }
    else{
        fs.writeFile(`./users/${email}.txt`,`${name}\n  ${email}\n ${pass}\n ${city}\n ${age}`,(err)=>{
            if(err){
                res.render('regis',{errMsg:'Something went wrong'})
            }
    
    else{
        // res.render('regis',{succMsg:'Registerd Successfully'})
        res.redirect("/users/welcome/" +email)
    }
})
    }
}) 

const login=((req,res)=>{
    res.send("Login done")
})

module.exports={
    registration,
    login
}