const fs = require('fs');


const register = (req, res) => {
    // let {name,email,pass,city,age}=req.body;
    // if(fs.existsSync(`./users/${email}.txt`))
    // {
    //     res.render('regis',{errMsg:'Email Already Registerd'})
    // }
    // else{
    //     fs.writeFile(`./users/${email}.txt`,`${name}\n  ${email}\n ${pass}\n ${city}\n ${age}`,(err)=>{
    //         if(err){
    //             res.render('regis',{errMsg:'Something went wrong'})
    //         }

    // else{
    //     // res.render('regis',{succMsg:'Registerd Successfully'})
    //     // res.redirect("/users/welcome/" +email)
    //     res.redirect('/details');
    // }

    let { name, email, password, age, city } = req.body;
    let data = `${name},${email},${password},${age},${city}`;
    // if (name === '' || email === '' || pass === '' || city === '') {
    //     res.render('regis', { errMsg: "Fields are missing!" });
    // }
    fs.appendFile('./users/data.txt', data + '\n', err => {
        if (err) throw err;
    })
    res.render("regis",{ main:true, succMsg: "Registered Successfully" });
}
//     }
// }) 




const details = (req, res) => {
    var allDetails = fs.readFileSync('./users/data.txt').toString().split('\n');
    var detailsInFormat = getDetailsInFormat(allDetails);
    console.log(detailsInFormat);
    res.render('details', { info:detailsInFormat});
}

function getDetailsInFormat(allDetails) {
    let arr = [];
    allDetails.forEach(element => {
        let temp = element.split(',');
        let obj = {
            name: temp[0],
            email: temp[1],
            age: temp[3],
            city: temp[4]
        }
        arr.push(obj);
    });
    return arr;
}
const login = ((req, res) => {
    res.send("Login done")
})

module.exports = {
    register,
    details,
    login

}