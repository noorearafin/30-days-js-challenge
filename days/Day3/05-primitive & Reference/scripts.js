//primitive vs reference
// primitive examples: number, string, boolean, null, undefined, symbol, bigint
// reference examples: objects, arrays, functions
//primitives are stored directly in the variable for example stack
//references store the memory address where the data is located for example heap

let name = "John"; //primitive
let age = 30; //primitive
let person = {
    name: "Rafi",
    age: 25
}
let name2 = name; //copying the value
let newPerson = person
newPerson.name = name2
console.log(person.name); //Rafi
console.log(newPerson.name); //John
//but is console showed both name as John because both point to same memory address

//primitive
let num1 = 10;
let num2 = num1; //copying the value

console.log("Before changing:");
console.log("num1:", num1); //10
console.log("num2:", num2); //10

num2 = 20; //changing num2

console.log("After changing num2:");
console.log("num1:", num1); //10
console.log("num2:", num2); //20

//reference
let arr1 = [1, 2, 3];
let arr2 = arr1; //copying the reference

console.log("Before changing:");
console.log("arr1:", arr1); //[1,2,3]
console.log("arr2:", arr2); //[1,2,3]

arr2.push(4); //modifying arr2

console.log("After modifying arr2:");
console.log("arr1:", arr1); //[1,2,3,4]
console.log("arr2:", arr2); //[1,2,3,4]         

//demonstrating with objects
let obj1 = { name: "Alice", age: 25 };
let obj2 = obj1; //copying the reference

console.log("Before changing:");
console.log("obj1:", obj1); //{ name: "Alice", age: 25 }
console.log("obj2:", obj2); //{ name: "Alice", age: 25 }

obj2.age = 30; //modifying obj2

console.log("After modifying obj2:");
console.log("obj1:", obj1); //{ name: "Alice", age: 30 }
console.log("obj2:", obj2); //{ name: "Alice", age: 30 }                    

// in summery, primitives are copied by value, while references are copied by reference.
//modifying a primitive does not affect the original variable, while modifying a reference affects all references to that object.
