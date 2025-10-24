// date times is java script file

let d;

d = new Date();
console.log(d); // answer current date and time

d = d.toString();
console.log(d); // answer current date and time in string format

d =new Date(2021, 10, 5, 10, 33, 30, 0);
console.log(d); // answer specific date and time like 5th Nov 2021 10:33:30 AM

d = new Date('2021-11-05 10:33:30');
console.log(d); // answer specific date and time using string format like 5th Nov 2021 10:33:30 AM

// d = new Date(2021-07-25T12:30:00);
console.log(d); // answer specific date and time using ISO format like 25th July 2021 12:30:00 PM

d = Date.now();
console.log(d); // answer current date and time in milliseconds since January 1, 1970

d = new Date();
console.log(d.getFullYear()); // answer current year

d = new Date();
d = d.getTime();
console.log(d); // answer current date and time in milliseconds since January 1, 1970

d =new Date (3432432432432);
console.log(d); // answer specific date and time using milliseconds since January 1, 1970

d = Math.floor(Date.now() / 1000);
console.log(d); // answer current date and time in seconds since January 1, 1970
