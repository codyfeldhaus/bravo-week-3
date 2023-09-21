//normal function
function double(number) {
  return number * 2;
}

let value1 = double(5);
let value2 = double(0.3);

// console.log(value1);
// console.log(value2);


//anonymous function

//the actual function is the part AFTER the equal sign
//it does not technically have its own name
//we are storing in the variable called triple
//which effectively gives it a name
const triple = function(number) {
  return number * 3;
}



// console.log(triple(3), triple(4));

//arrow functions
const quadruple = (number) => {
  return number * 4;
}

//even simpler arrow function
const half = (number) => number / 2; 
//for simple, single line functions that return a value
//we can omit the curly brackets and the return keyword altogether and just write on the same line

// console.log(quadruple(10), quadruple(.5));

//Example
//take in a number and return true if it is even and false otherwise
//% -> mod operator
function isEven1(num) {
  return (num % 2 === 0);
  // if (num % 2 == 0) {
  //   return true;
  // }
  // return false;
}

//anonymous
const isEven2 = function(num) {
  return (num % 2 === 0);
}

//arrow
//if only accepting one parameter, don't need () around it
const isEven3 = num => num % 2 === 0;

console.log(isEven1(10),
            isEven2(11),
            isEven3(0))


//write an ARROW function that takes a string 'person' as
//a parameter and returns a greeting that says 'Hello [name]!'
const greet = person => console.log(`Hello ${person}`);

// console.log(greet("Cody"));
// console.log(greet("Jennifer Lopez"));

greet("Steve");