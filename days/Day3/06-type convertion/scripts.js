// type conversion in JavaScript

// Converting string to number
let amount = '100';
amount = Number(amount);
amount = parseInt(amount);
amount = parseFloat(amount);
amount = +amount;

console.log(amount, typeof amount);

let name = 'hello';
name = Number(name); // NaN
name = parseInt(name); // NaN
name = +name; // NaN

console.log(name, typeof name);

//NaN is a special numeric value that represents "Not-a-Number"
//It indicates that a value is not a valid number
//typeof NaN is 'number'

//converting number to string
let amount2 = 100;
amount2 = String(amount2);
console.log(amount2, typeof amount2);
amount2 = amount2.toString();
console.log(amount2, typeof amount2);

//converting number to boolean
let isActive = 1;
isActive = Boolean(isActive);
console.log(isActive, typeof isActive);

//NaN
console.log(Math.sqrt(-1)); //NaN
console.log(1 + NaN); //NaN
console.log(undefined + undefined);
console.log('foo' - 2); //NaN
console.log('foo' / 2); //NaN