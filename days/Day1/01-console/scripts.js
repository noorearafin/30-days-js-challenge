console.log(100);

console.log("Hello, World!");

console.log(true);

console.log(null);

console.log(undefined);

console.log(3.14);

console.warn("This is a warning message!");

console.error("This is an error message!");

console.table({ name: "Alice", age: 30, city: "New York" });

console.group("User Info");
console.log("Name: Bob");
console.log("Age: 25");
console.log("City: Los Angeles");
console.groupEnd();

console.time("Loop Time");
for (let i = 0; i < 1000000; i++) {
    // Simulating a time-consuming task
}
console.timeEnd("Loop Time");

const style = "color: blue; font-size: 20px;";
console.log("%cStyled Text", style);


