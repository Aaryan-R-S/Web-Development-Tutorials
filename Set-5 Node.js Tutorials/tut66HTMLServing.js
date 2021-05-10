const http = require('http')
const fs = require('fs')

const x = fs.readFileSync('Ntut34Shadow.html')

const server = http.createServer((req, res)=> {
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end(x)
})

server.listen(80, '127.0.0.1', ()=>{
    console.log("listening on port 80")
})
