// Array literals
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits); // ['apple', 'banana', 'cherry']

// Accessing elements
console.log(fruits[0]); // 'apple'
console.log(fruits[1]); // 'banana'
console.log(fruits[2]); // 'cherry'

// Modifying elements
fruits[1] = 'blueberry';
console.log(fruits); // ['apple', 'blueberry', 'cherry']

// Array length
console.log(fruits.length); // 3

// Adding elements
fruits.push('date');
console.log(fruits); // ['apple', 'blueberry', 'cherry', 'date']

// Removing elements
let removedFruit = fruits.pop();
console.log(removedFruit); // 'date'
console.log(fruits); // ['apple', 'blueberry', 'cherry']

//array constructor
let vegetables = new Array('carrot', 'broccoli', 'spinach');
console.log(vegetables); // ['carrot', 'broccoli', 'spinach']

// Accessing elements
console.log(vegetables[0]); // 'carrot'
console.log(vegetables[1]); // 'broccoli'
console.log(vegetables[2]); // 'spinach'

// Modifying elements
vegetables[2] = 'kale';
console.log(vegetables); // ['carrot', 'broccoli', 'kale']

// Array length
console.log(vegetables.length); // 3

// Adding elements
vegetables.push('lettuce');
console.log(vegetables); // ['carrot', 'broccoli', 'kale', 'lettuce']

// Removing elements
let removedVegetable = vegetables.pop();
console.log(removedVegetable); // 'lettuce'
console.log(vegetables); // ['carrot', 'broccoli', 'kale']

// Adding elements by direct assignment
let vegetables[vegetables.length] = 'cabbage';
console.log(vegetables); // ['carrot', 'broccoli', 'kale', 'cabbage']
