const fs = require('fs');
const http = require('http');

const x = fs.readFileSync("Project2 Food Track/indexN.html");
const y = fs.readFileSync('Project1 Gym/index.html');

const port = 3000;
const hostname ='127.0.0.1';

const server = http.createServer((req,res)=>{
     console.log(req.url)
     url = req.url

     if (url=='/'){
        res.end(x);
    }
    else if (url == '/home'){
        res.end(y)
    }
    else{
        res.statusCode=404;
        res.end('<H1> 404 Not Found </H1>')
    }
    
    res.writeHead(200, {'Content-type':'text/html'})
})

server.listen( port, hostname,()=>{
    console.log(`Serving at http://${hostname}:${port}/`)
})

