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
// const isPalindrome = string => string.replaceAll(' ', '') === string.replaceAll(' ', '').split('').reverse().join('');

// let myString = "a man a plan a canal panama";
// let myStringSplit = myString.split(''); //splits string at every character and returns them in an array
// console.log("myStringSplit before reverse", myStringSplit);


// let myStringSplitReverse = myStringSplit.reverse();
// console.log(myStringSplitReverse);
// console.log("myStringSplit post reverse", myStringSplit);

// let myStringSplitReverseJoin = myStringSplitReverse.join('');
// console.log(myStringSplitReverseJoin);

// console.log(isPalindrome("a man a plan a canal panama"));

//Write a function called capitalizeWords that takes an array of lowercase 
//words and returns a new array where the first letter of each word is capitalized

//input: ['apple', 'banana', 'cherry']
//output: ['Apple', 'Banana', 'Cherry']
//strings are immutable, consider slice string method

function capitalizeWords(words) {
  //return the array created by running capitalizeWord on every word in the array
  return words.map(word => capitalizeWord(word));
}

//split into array, capitalize first thing, join back together
function capitalizeWord(word) {
  //split the word into array of characters
  let letters = word.split('');
  //capitalize the first letter, resave in the first spot
  letters[0] = letters[0].toUpperCase(); //"C"
  //join the letters back into string, store in variable
  let capWord = letters.join(''); //'Chicken'
  //return the capitalized string
  return capWord;
}

// console.log(capitalizeWord("chicken"));

let myWords = ['apple', 'banana', 'cherry']
// console.log(capitalizeWords(myWords));

//take the first letter, capitalize it, add it to slice of remaining letters
function capitalizeWords2(words) {
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
}

console.log(capitalizeWords2(myWords));