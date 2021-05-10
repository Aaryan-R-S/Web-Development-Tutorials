const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000 ;

const Home = fs.readFileSync('home.html')
const About = fs.readFileSync('about.html')
const Services = fs.readFileSync('services.html')
const Contact = fs.readFileSync('contact.html')

const server = http.createServer((req,res)=>{
    console.log(req.url)
    url=req.url

    if (url=='/'){
        res.end(Home);
    }
    else if (url == '/about'){
        res.end(About)
    }
    else if (url == '/services'){
        res.end(Services)
    }
    else if (url == '/contact'){
        res.end(Contact)
    }
    else{
        res.statusCode=404;
        res.end('<H1> 404 Not Found </H1>')
    }

    res.writeHead(200, {'Content-type':'text/plain'});
    //or res.statuscode(200);
    //   res.setheader('Content-type', 'text/plain');
})

server.listen(port, hostname, ()=>{
    console.log(`Server Running at http://${hostname}:${port}/`)
});