//map method
//gives us a way to apply a single function to every element in an array
//or to have a function that applies things to some elements of an array
//based on specific criteria


let names = ["Cody", "Casey", "Clayton", "Kara", "Hope"];

//without map
// function greet(person) {
//   console.log(`Hello ${person}!`);
// }
// for (let person of names) {
//   greet(person);
// }

//with map
// names.map(person => console.log(`Hello ${person}!`));

//only want to greet people with names longer than 4 characters
// names.map((person) => {
//   if (person.length > 4) {
//     console.log(`Hello ${person}!`);
//   }
// })

// let grades = [99.1, 87.5, 56.2, 88.1, 93.9];

// let roundedGrades = grades.map(grade => Math.round(grade));

// console.log(roundedGrades);


//isPalindrome
const isPalindrome = string => string.replaceAll(' ', '') === string.replaceAll(' ', '').split('').reverse().join('');

let myString = "a man a plan a canal panama";
let myStringSplit = myString.split(''); //splits string at every character and returns them in an array
console.log("myStringSplit before reverse", myStringSplit);


let myStringSplitReverse = myStringSplit.reverse();
console.log(myStringSplitReverse);
console.log("myStringSplit post reverse", myStringSplit);

let myStringSplitReverseJoin = myStringSplitReverse.join('');
console.log(myStringSplitReverseJoin);

console.log(isPalindrome("a man a plan a canal panama"));