console.log('This is Module')

//This is function taken as example --
function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum/arr.length;
}

//This is how we exports --
//First Example--
//module.exports = name of function
  module.exports = average;

 //Second example --
  module.exports.name = "ARS"
  module.exports.age = "18"