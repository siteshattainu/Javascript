const http = require('http')
// const server = http.createServer()

// server.on('connection', function(){
//     console.log('Connection established...');
// })

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.write("This is homepage")
        res.end();
    }
    if(req.url == '/images'){
        res.write("This is images section");
        res.end();
    }
})

server.listen(5000);

console.log("Listening on port 5000");