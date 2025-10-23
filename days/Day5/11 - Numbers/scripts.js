//method use in numbers
let x;

const num = new Number(9);
console.log(num); // [Number: 9]

x = num.toString();
console.log(x, typeof x); // 9 'string'

x = num.toString().length;
console.log(x, typeof x); // 1 'number'

x = num.toFixed(2);
console.log(x, typeof x); // 9.00 'string'

x = num.toPrecision(3);
console.log(x, typeof x); // 9.00 'string'

x = num.valueOf();
console.log(x, typeof x); // 9 'number'

x = num.isInteger(9.5);
console.log(x); // false

x = num.toExponential(2);
console.log(x, typeof x); // 9.00e+0 'string'

x = num.toLocaleString('en-US');
console.log(x, typeof x); // 9 'string'

x = Number.MAX_VALUE;
console.log(x); // 1.7976931348623157e+308

x = Number.MIN_VALUE;
console.log(x); // 5e-324



