//ways to ddeclare variables in JavaScript
//1. var,2. let, 3. const

let firstName = "John"; //string variable
let lastName = "Doe";

console.log(firstName, lastName);

let age = 25; //number variable
console.log(age);

//naming conventions for variables
//only letters, digits, underscores and dollar signs
//cannot start with a digit
//case sensitive

//multiple words variable naming conventions
// firstName => camelCase
// first_name => snake_case
// FirstName => PascalCase
// firstname => lowercase

// reassigning variables
firstName = "Jane";
console.log(firstName);

//const variable
const country = "USA";
console.log(country);

// country = "Canada"; //this will give an error because const variables cannot be reassigned 
//but we can change properties of const objects and arrays
const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);

let score = 100; //number variable

if (true) {
    score = score + 50; //reassigning score variable
    console.log("Inside block:", score);
}
console.log("Outside block:", score);

//object 
//const object
const person = {
    name: "Alice",
    age: 30
};
person.age = 31; //changing property of const object
console.log(person);

//var object
var car = {
    brand: "Toyota",
    model: "Camry"
};
car.model = "Corolla"; //changing property of var object
console.log(car);

//multiple variable declaration
let x = 10, y = 20, z = 30;
console.log(x, y, z);
const pi = 3.14, e = 2.71;
console.log(pi, e);


//summary
// use let for variables that will change
// use const for variables that won't change
// follow naming conventions for better readability
// remember the scope of variables declared with let and const
// practice good variable naming for maintainable code


