const express = require('express')
const app = express()

app.use(express.json())

let cnt = 0;

app.get('/', (req, res) => {
    cnt++;
    res.send(cnt.toString());
})

app.get('/reset', (req, res) => {
    cnt = 0;
    res.send(cnt.toString());
})

app.listen(5000, () => {
    console.log("server is running")
})