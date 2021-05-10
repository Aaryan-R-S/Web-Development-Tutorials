//Sychronous or Blocking -- line by line execution
//Asychronous or Non-blocking -- line by line execution not guaranteed -- callbacks will be fire
 
const fs = require('fs')

// Asynchronous form of read file
//let x = fs.readFile("del.txt", "UTF-8")  will give error as no callback is given

let x = fs.readFile("del.txt", "UTF-8", (error, data)=>{
    console.log(data)
})  //here callback is given

console.log(" This is a message !")

//see in terminal file is read later at last

//hence node js is asynchronus