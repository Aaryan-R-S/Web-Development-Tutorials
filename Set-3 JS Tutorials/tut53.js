console.log("This is js file");


let name = 'ARS';
console.log(name + ' is a good boy !');
console.log("  ")


// shortcut for too many names
function greet(N, GR="Good Night! "){

    let name1 = "Yo"

    console.log(GR+N)
    console.log(N+' is a good boy !');
}

let name1 = "ARS1"; //See no effect on name1 due to local name1 Yo 
let name2 = "ARS2";
let name3 = "ARS3";
let name4 = "ARS4";
let gm = "Good Morning! ";


greet(name1, gm);
greet(name2, gm);
greet(name3);//See here not morning but night due to default value given
greet(name4,gm="Good Afternoon! "); //also see here

console.log(" ")


let returnvalue = greet(name1)
console.log(returnvalue)
//see it is undefined bcz it is empty so it carries no return values

console.log("")

function sum(x,y,z){
    let d = x+y+z;
    return d;

    // After return no code will be executed so it will not be printed
    console.log("Hi")
}

let a=1
let b=2
let c=3
console.log(sum(a,b,c))
console.log(a+b+c)