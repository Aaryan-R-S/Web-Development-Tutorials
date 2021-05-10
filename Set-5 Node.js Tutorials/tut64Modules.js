const fs = require('fs')
let x = fs.readFileSync("del.txt", "UTF-8")

console.log(x)
console.log(x.replace("hsocoi","Hi"))

console.log("Creating a new file !...")
fs.writeFileSync("Hi.txt", x.replace("hsocoi","Hi"))

//Types of modules
// 1. Built-in
// 2. Custom
// 3. Third-party