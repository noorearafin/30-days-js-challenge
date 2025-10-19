//primitive data types
// string => sequence of characters must be enclosed in quotes
// number => integer or floating point
// boolean => true or false
// null => absence of any value
// undefined => variable declared but not assigned a value
// symbol => unique and immutable data type
//bigint => for very large integers

//non-primitive data types
// object => collection of key-value pairs
// array => ordered list of values

//static vs dynamic typing
// static typing => variable type is known at compile time (e.g., Java, C#)
// dynamic typing => variable type is known at runtime (e.g., JavaScript, Python)

//string data type

const name = "Noor-E Arafin"
console.log("Name:", name);
console.log("Type of name:", typeof name);

//number data type
const age = 22;
console.log("Age:", age);
console.log("Type of age:", typeof age);

const temperature = 36.5;
const output = "Temperature is " + temperature + " degree Celsius.";
console.log(output);
console.log("Type of temperature:", typeof temperature);

//boolean data type
const isStudent = true;
console.log("Is Student:", isStudent);
console.log("Type of isStudent:", typeof isStudent);

//null data type
const emptyValue = null;
console.log("Empty Value:", emptyValue);
console.log("Type of emptyValue:", typeof emptyValue); // returns 'object' due to a historical bug in JavaScript
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null

//undefined data type
let uninitializedVar;
console.log("Uninitialized Variable:", uninitializedVar);
console.log("Type of uninitializedVar:", typeof uninitializedVar);

//symbol data type
const uniqueId = Symbol("id");
console.log("Unique ID:", uniqueId);
console.log("Type of uniqueId:", typeof uniqueId);

//bigint data type
const bigIntNumber = 9007199254740991n; // 'n' at the end denotes a BigInt
console.log("BigInt Number:", bigIntNumber);
console.log("Type of bigIntNumber:", typeof bigIntNumber);

//refrerence data types
//object data type
const person = {
    name: "Arafin",
    age: 22,
    isStudent: true
};
console.log("Person Object:", person);
console.log("Type of person:", typeof person);

//array data type
const numbers = [1, 2, 3, 4, 5];
console.log("Numbers Array:", numbers);
console.log("Type of numbers:", typeof numbers); // returns 'object' because arrays are objects in JavaScript

//function data type
const greet = function () {
    return "Hello, World!";
};
console.log("Greet Function:", greet());
console.log("Type of greet:", typeof greet);
