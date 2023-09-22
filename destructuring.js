//destructuring
//allows you to 'unpack' values from arrays or properties from objects
//into distinct variables. can make code more readable and manageable 
//by avoiding needing to access values with indices or keys every single time

//array destructuring
const fruits = ["apple", "banana", "cherry", "durian", "elderberry"]

//'old' way
// const firstFruit = fruits[0];
// const secondFruit = fruits[1];
// const thirdFruit = fruits[2];
// const fourthFruit = fruits[3];
// const fifthFruit = fruits[4];

//with destructuring
const [firstFruit, secondFruit, thirdFruit, fourthFruit, fifthFruit] = fruits;

// console.log(firstFruit);
// console.log(fourthFruit);


//object destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

//'old' way
// const first = person.firstName;
// const last = person.lastName;
// const age = person.age;

//with destructuring
//{originalProperty: newVariable}
// const { firstName: first, lastName: last, age: age } = person;
const {firstName, lastName, age} = person;
// console.log(first, last, age);

// const person2 = {
//   name: {first: "John", last: "Doe"},
//   age: 30
// }

// const {personsName: {personsFirst, personsLast}, personsAge} = person2;

// console.log(personsFirst);
// console.log(personsLast);
// console.log(personsAge);


//simulating API data
const user = {
  id: 1,
  name: "John Doe",
  address: {
    street: '123 Main St',
    city: 'Anytown'
  }
};

//without destructuring:
// console.log(user.name);
// console.log(user.address.street);
// console.log(user.address.city);

// const { firstName: first, lastName: last, age: age } = person;


//if you want to use names other than the property names for variables
// const {
//   name: userName,
//   address: {street: userStreet, city: userCity}
// } = user;

// console.log(userName);
// console.log(userStreet);
// console.log(userCity);


//if you're fine using the same name as the original property
const {
  name,
  address: {street, city}
} = user;

console.log(name); //instead of user.name
console.log(street); //instead of user.address.street
console.log(city); //instead of user.address.city