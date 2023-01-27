const express = require('express')
const app = express()
const my_middlware = require('./Middleware')

app.use(my_middlware)

app.use(function(req, res, next){
    console.log("this is second middlware");
    next();
})

app.use(express.json())
//assuming we got this from database
let name = "Sherlock"

//localhost:5000
//localhost => 127.0.0.1

//https://university.attainu.com/create-announcement

//Route handlers are technically middlewares

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/name/:lastname', (req, res) => {
    let lastname = req.params.lastname
    name = name + " " + lastname
    res.send(name);
})

//POST
app.post('/name/insert', (req, res) => {
    let new_name = req.body.name
    let middle_name = req.body.middlename
    let last_name = req.body.lastname
    //assuming this is updating in database
    name = new_name + middle_name + last_name;
    res.send(name);
})

//PUT
app.put('/name/update', (req, res) => {
    let new_name = req.body.name
    console.log(name);
    name = new_name;
    console.log(name);
    res.send(name);
})

//DELETE
app.delete('/name/remove', (req, res) => {
    name = null;
    console.log(name);
    res.send(name);
})

app.listen(5000, () => {
    console.log("Server is live on 5000")
})