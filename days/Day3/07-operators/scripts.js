//operators
// 1. Arithmetic Operators ex: +, -, *, /, %, ++, --

let a = 10;

a = a + 5; //15
a = a - 3; //12
a = a * 2; //24
a = a / 4; //6
a = a % 4; //2

console.log(a);

// concatenation operator
let str1 = "Hello, ";
let str2 = "World!";
let greeting = str1 + str2;
console.log(greeting); //Hello, World!

// EXPONENTIAL OPERATOR
let base = 2;
let exponent = 3;
let result = base ** exponent; //2^3=8
console.log(result);

// increment and decrement
let count = 0;
count++; //1
count--; //0
console.log(count);

// 2. Assignment Operators ex: =, +=, -=, *=, /=, %=

let x = 10;
x += 5; //x=x+5=15
x -= 3; //x=x-3=12
x *= 2; //x=x*2=24
x /= 4; //x=x/4=6
x %= 4; //x=x%4=2

console.log(x);

// 3. Comparison Operators ex: ==, ===, !=, !==, >, <, >=, <=

let P = 10;

// P = 10 == '10'; //true
// P = 10 === '10'; //false
// P = 10 != '5'; //true
// P = 10 !== '10'; //true
// P = 10 > 5; //true
// P = 10 < 5; //false
// P = 10 >= 10; //true
// P = 10 <= 5; //false

console.log(P);
