const express = require("express");
const fs = require("fs");
const app = express();
const port = 80;
const path = require('path');

//EXPRESS SPECIFIC
app.use('/static', express.static('static'))  //Serving Static Files
// app.use('/typewhatinURL', express.static('name of folder'))
app.use(express.urlencoded())

//PUG SPECIFIC 
app.set('view engine', 'pug')//Set the template engine as  pug
app.set('views', path.join(__dirname, 'views'))//Set the views directory where pug is being written


//PUG ENDPOINTS
app.get('/', (req, res) => {
    const x = {'title':'This is pug title', 'content' :'This is pug Content'}
    res.status(200).render('forapp1.pug', x)
})
app.post('/', (req,res)=>{
    console.log(req.body)
    //OR
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address

    let O = `The name of client is ${name}, ${age} years old, ${gender}, residing at ${address}`
    fs.writeFileSync('Output.txt', O)

    const y = {'message' :'Your form has been submitted'}
    res.status(200).render('forapp1.pug', y)
})

// START THE SERVER
app.listen(port, ()=>{
     console.log(`App has started on port ${port}`)
});