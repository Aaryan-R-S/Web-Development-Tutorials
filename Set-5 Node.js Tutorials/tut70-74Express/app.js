const express = require("express");
const app = express();
const port = 80;
const path = require('path')

//Serving Static Files
app.use('/static', express.static('static'))

//Set the template engine as  pug
app.set('view engine', 'pug')

//Set the views directory
app.set('views', path.join(__dirname, 'views'))

//Our pug demo 
app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there! Thanks for telling me how to use pug !' })
  })

app.get("/", (req, res)=>{
    res.send("This is my first app with express Home")
});

app.get("/about", (req, res)=>{
    res.status(200).send("This is my first app with express About")
});

app.get("/contact", (req, res)=>{
    res.send("This is my first app with express Contact")  
});

app.post("/contact", (req, res)=>{
    res.send("This is my first app with express Contact")
});

app.get("/hi", (req, res)=>{
    res.status(404).send("This page is not found on this web")
});

app.listen(port, ()=>{
     console.log(`App has started on port ${port}`)
});