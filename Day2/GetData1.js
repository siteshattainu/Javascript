const { urlencoded } = require('express')
const express = require('express')
const app = express()

app.use(express.json())
app.use(urlencoded({extended: true}))

app.set('view engine', 'hbs')
// app.set('views', './newviews')

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get('/page', (req, res) => {
    res.sendFile(__dirname + "/index1.html", (err) => {
        console.log(err)
    })
})

app.get('/show', (req, res) => {
    res.render('template.hbs', {})
})

app.get('/getdata', (req, res) => {
    let data = req.query
    // console.log(data);
    res.render("response.hbs", data)
})

app.get('/products/:id', (req, res) => {
    let data = req.params;
    let query_string_params = req.query;
    console.log(data);
    console.log(query_string_params);
    res.send("success")
})

app.post('/post_getdata', (req, res) => {
    let data = req.body;
    res.render("response.hbs", data)
    // res.send("success")
})

app.listen(5000, () => {
    console.log("server is live")
})

// send() => directly sends the response data
// render() => to render templates
// sendFile() => send html files on client