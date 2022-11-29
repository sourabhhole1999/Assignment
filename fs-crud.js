// Importing https module
const http = require('http');
const fs = require('fs');

//Declare The Port
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {

        res.write('<html> <body> <h1> File Handling ...!!! </h1> <button style="background-color:yellow" ><a style="margin:14px;" href="/createFile" >Create File</a> </button> &nbsp;&nbsp;&nbsp; <button style="background-color:pink"><a href="/readFile" style="margin:14px;">Read File</a> </button>&nbsp;&nbsp;&nbsp;<button><a style="margin:14px;" href="/updateFile" >Update File</a></button>&nbsp;&nbsp;&nbsp;<button style="background-color:red"> <a style="margin:14px;" href="/deleteFile" >Delete File</a></button></body></html>');

        res.end();
    }
    else if (req.url === '/createFile') {
        if (fs.existsSync("neosoft.txt")) {
            res.end("<h1> File Is Already Created...!!! </h1>");
        }
        else {
            fs.writeFile("neosoft.txt", "Welcome to NeoSOFT!", (err) => {
                if (err) throw err;
                res.end("<h1 > File Is Created Successfully...!!! </h1>");
            })
        }
    }
    else if (req.url === '/readFile') {
        if (fs.existsSync('neosoft.txt')) {
            let data = fs.readFileSync("neosoft.txt");
            res.end(data.toString());
        }
        else {
            res.end("<h1> File Is Not Exist...!!! </h1>");
        }
    }
    else if (req.url === '/updateFile') {
        if (fs.existsSync('neosoft.txt')) {
            fs.appendFile("neosoft.txt", "Hello World", (err) => {
                if (err) throw err;
                else res.end("<h1> The File Is Updated Successfully...!!! </h1>");
            })
        }
        else {
            res.end("<h1> File Is Not Exist...!!! </h1>");
        }
    }
    else if (req.url === '/deleteFile') {
        if (fs.existsSync('neosoft.txt')) {
            fs.unlink('neosoft.txt', err => {
                if (err) throw err;
                else res.end("<h1> File Is Deleted Successfully...!!! </h1>");
            });
        }
        else {
            res.end("<h1> File Is Not Exist...!!! </h1>");
        }
    }
    else {
        res.end("<h1> 404 Page Not Found </h1>")
    }
})

server.listen(port, err => {
    if (err) throw err;
    else console.log(`Server is work on ${port}`);
})