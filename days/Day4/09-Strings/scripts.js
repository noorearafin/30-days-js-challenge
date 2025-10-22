

const name = 'john'
const age = 30;

x = 'My name is ' + name + ' and I am ' + age + ' years old.'; //String Concatenation

x = `My name is ${name} and I am ${age} years old.`; //Template Literals

//why x does not need to be declared with let or const?
//In JavaScript, if you assign a value to a variable that has not been declared using let, const, or var, it is automatically created as a global variable. This behavior is generally discouraged because it can lead to unintended consequences, such as polluting the global namespace and making the code harder to debug and maintain. It's considered a best practice to always declare your variables explicitly using let, const, or var to avoid such issues.

//string properties and methods
let str = " Hello, World! ";

console.log(typeof str); // "string"

//length property
console.log(str.length); //13

//toUpperCase() method
console.log(str.toUpperCase()); // " HELLO, WORLD! "

//toLowerCase() method
console.log(str.toLowerCase()); // " hello, world! "

//trim() method
console.log(str.trim()); // "Hello, World!"

//charAt() method
console.log(str.charAt(0)); // " "

//indexOf() method
console.log(str.indexOf('W')); //8

//slice() method
console.log(str.slice(7, 12)); // "World"

//replace() method
console.log(str.replace('World', 'JavaScript')); // " Hello, JavaScript! "

//split() method
console.log(str.split(', ')); // [ ' Hello', 'World! ' ]            
//includes() method
console.log(str.includes('World')); // true

//repeat() method
console.log(str.repeat(2)); // " Hello, World!  Hello, World! "



console.log(x);