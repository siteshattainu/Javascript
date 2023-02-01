const express = require('express')
const app = express()

app.set('view engine', 'hbs')

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get('/page', (req, res) => {
    res.sendFile(__dirname + "/index1.html", (err) => {
        console.log(err)
    })
})

app.get('/getdata', (req, res) => {
    let data = req.query
    console.log(data);
    res.render("response.hbs", data)
})

app.listen(5000, () => {
    console.log("server is live")
})

// send() => directly sends the response data
// render() => to render templates
// sendFile() => send html files on client