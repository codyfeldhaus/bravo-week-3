//object notation

//car object has three properties to begin with
const car = {
  //key: value,
  make: "Toyota",
  'model': "Camry",
  year: 2020
};
//accessing the properties:
// console.log(`The make of the car is ${car.make}`);
//if the key is a string, must use this syntax:
// console.log(`The model of the car is ${car['model']}`);

//add properties
car.mileage = 50000
// console.log(`The car's starting mileage is ${car.mileage}`);

//update properties
car.mileage = car.mileage + 10000;
// console.log(`The car's new mileage is ${car.mileage}`);

//nested objects
 const movie = {
  title: "A Movie",
  director: "Someone",
  releaseYear: 1900,
  cast: {
    "Jon": "Not Jon",
    "Sam": "Marie",
    "Sue": "Mark"
  }
 }
 //who played Sam?
//  console.log(movie.cast["Sam"]); 
//  console.log(movie["cast"]["Sam"]);

 //add a character
 movie.cast["Randy"] = "Paul";
//  console.log(movie);

//array filter method
//creates a new array of elements that pass a specific test
//given by the provided function

//Filter an array to get only the even numbers
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(number => number % 2 === 0); //[2, 4, 6]
const oddNumbers = numbers.filter((number) => {
                                      return number % 2 === 1;
                                  }); 
//numbers.filter(isEven(number)); //if you had a separate isEven function

// console.log(evenNumbers);
// console.log(oddNumbers);

//Filter out negative numbers
const myNumbers = [1, -2, 5, -3, 0, 10];
//expected output: [1, 5, 0, 10];
const nonNegatives = myNumbers.filter(number => number >= 0);
console.log(nonNegatives);

//Filter out words shorter than 4 characters
const words = ["apples", "are", "good", "for", "you"];
const longWords = words.filter(word => word.length >= 4);
console.log(longWords);

//you are planning your holiday office party at a local
//nightclub but unfortunately only employees 21+ can attend
//you have an array of employee objects each with a name and age property
//use the filter method to create an array with just the employees
//who are able to attend

const employees = [{name: 'John', age: 25}, 
                   {name: 'Jane', age: 20},
                   {name: 'Mike', age: 30},
                   {name: 'Jill', age: 27},
                   {name: 'Sam', age: 19}];
                
const invitedEmployees = employees.filter(employee => employee.age >= 21);
console.log(invitedEmployees);

//now use the map method to return an array of just the employee names
//we no longer need their age information

const invitedNames = invitedEmployees.map(employee => employee.name);
console.log(invitedNames);