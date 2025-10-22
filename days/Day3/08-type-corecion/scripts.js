// type coercion in JavaScript
// automatic conversion of values from one type to another
// happens during operations involving different data types
// especially in arithmetic and concatenation operations
// can lead to unexpected results if not understood properly
// important to be aware of type coercion to avoid bugs
// and ensure correct behavior of code

// Example 1: String and Number concatenation
let result1 = '5' + 10; // '510' (number 10 is coerced to string)
console.log(result1, typeof result1); // '510' string

// Example 2: Subtraction with strings
let result2 = '20' - 5; // 15 (string '20' is coerced to number)
console.log(result2, typeof result2); // 15 number

// Example 3: Multiplication with strings
let result3 = '4' * '2'; // 8 (both strings are coerced to numbers)
console.log(result3, typeof result3); // 8 number

// Example 4: Boolean coercion
let result4 = true + 1; // 2 (true is coerced to 1)
console.log(result4, typeof result4); // 2 number

let result5 = false + 1; // 1 (false is coerced to 0)
console.log(result5, typeof result5); // 1 number

// Example 5: Equality comparison
let isEqual1 = '5' == 5; // true (string '5' is coerced to number)
console.log(isEqual1, typeof isEqual1); // true boolean

let isEqual2 = '0' == false; // true (string '0' is coerced to number 0, false to 0)
console.log(isEqual2, typeof isEqual2); // true boolean

// Example 6: Strict equality comparison
let isStrictEqual = '5' === 5; // false (no coercion, different types)
console.log(isStrictEqual, typeof isStrictEqual); // false boolean

// To avoid unexpected results, it's often better to use explicit type conversion
// using Number(), String(), or Boolean() functions as needed.  