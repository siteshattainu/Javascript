//hbs = Handlebars
const express = require("express")
const app = express()

app.set('view engine', 'hbs')

function check(age) {
    if(age >= 18){
        return true;
    }
    else{
        return false;
    }
}

app.get('/template', (req, res) => {
    res.render('home.hbs', {message: "You're allowed to vote", message2: "You're not allowed to vote"})
    // res.render('home.hbs', {people: ["Amit", "Ankit", "Sarah"]})
})

app.listen(5000, () => {
    console.log("Server is live")
})