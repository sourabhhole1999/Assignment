const express = require("express");
const fs = require('fs');
const PORT = 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/gallery', (req, res) => {
    res.render('gallery');
})
app.get('/services', (req, res) => {
    res.render('services');
})
app.get('/contact', (req, res) => {
    res.render('contact');

})
app.post('/data', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let pass = req.body.pass;
    let age = req.body.age;
    let city = req.body.city;
    let mobile = req.body.mobile;

    let data = name+","+email+","+ pass+","+age+","+city+","+mobile +"\n" ;
    
    
    fs.appendFile('file.txt', data, err => {
        if(err) throw err;
    })

    // res.send('<h1> Data Added Successfully...!!!');
    res.render("success");
})

app.get('/details', (req, res) => {
    var array = fs.readFileSync('file.txt','UTF-8').split("\n");
    const file = array.map(ele=>{
        const d = ele.split(',');
        return {name:d[0],email:d[1], pass:d[2], age:d[3], city:d[4], mobile:d[5]}
    })
            res.render('details', {file : file});
})

app.listen(PORT, err => {
    if(err) throw err;
    else console.log(`Server is run on ${PORT}`);
})