const express = require('express')
const upload = require('express-fileupload')
const app = express();

app.use(upload())

let data = []

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/myForm', (req, res) => {
    res.sendFile(__dirname + "/uploadForm.html");
})

app.post('/uploadForm', (req, res) => {
    let my_file = req.files.myFile;
    my_file.mv(__dirname + "/uploads/" + "new_file.jpg", (err) => {
        if(err){
            return res.send("There was an error");
        }
        res.send("File was uploaded")
    })
})

app.post('/getdata', (req, res) => {
    data.push(req.files.myFile);
    console.log(data);
    res.send("data added");
})

app.listen(5000, (req, res) => {
    console.log("server is live")
})