//Array methods in javascript

let x;

// 1. toString() method this method converts an array to a string of (comma separated) values.
x = [1, 2, 3, 4];
console.log(x.toString()); // '1,2,3,4'

// 2. join() method this method also converts an array to a string but allows you to specify a separator.
x = ['Hello', 'World', 'from', 'JavaScript'];
console.log(x.join(' ')); // 'Hello World from JavaScript'
console.log(x.join('-')); // 'Hello-World-from-JavaScript'

// 3. pop() method this method removes the last element from an array and returns that element.
x = [10, 20, 30, 40];
let poppedValue = x.pop();
console.log(poppedValue);
console.log(x); // [10, 20, 30]

// 4. push() method this method adds a new element to the end of an array and returns the new length of the array.
x = [5, 15, 25];
let newLength = x.push(35);
console.log(newLength);
console.log(x); // [5, 15, 25, 35]

// 5. shift() method this method removes the first element from an array and returns that element.
x = ['a', 'b', 'c', 'd'];
let shiftedValue = x.shift();
console.log(shiftedValue);
console.log(x); // ['b', 'c', 'd']

// 6. unshift() method this method adds a new element to the beginning of an array and returns the new length of the array.
x = [100, 200, 300];
let newLen = x.unshift(50);
console.log(newLen);
console.log(x); // [50, 100, 200, 300]

// 7. splice() method this method adds/removes elements from an array at a specified index.
x = ['red', 'green', 'blue', 'yellow'];
// Removing 1 element at index 2
let removedElements = x.splice(2, 1);
console.log(removedElements); // ['blue']
console.log(x); // ['red', 'green', 'yellow']
// Adding elements at index 1
x.splice(1, 0, 'orange', 'purple');
console.log(x); // ['red', 'orange', 'purple', 'green', 'yellow']

// 8. slice() method this method returns a shallow copy of a portion of an array into a new array object.
x = [0, 1, 2, 3, 4, 5];
// Slicing from index 2 to 4 (not including 4)
let slicedArray = x.slice(2, 4);
console.log(slicedArray); // [2, 3]
console.log(x); // [0, 1, 2, 3, 4, 5] (original array remains unchanged)

// 9. concat() method this method is used to merge two or more arrays.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = array1.concat(array2);
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]
console.log(array1); // [1, 2, 3] (original array remains unchanged)
console.log(array2); // [4, 5, 6] (original array remains unchanged)    

// 10. sort() method this method sorts the elements of an array in place and returns the sorted array.
x = [3, 1, 4, 2, 5];
x.sort();
console.log(x); // [1, 2, 3, 4, 5]

// 11. reverse() method this method reverses the order of the elements in an array in place.
x = ['first', 'second', 'third'];
x.reverse();
console.log(x); // ['third', 'second', 'first']

// 12. indexOf() method this method returns the first index at which a given element can be found in the array, or -1 if it is not present.
x = ['apple', 'banana', 'cherry', 'date'];
let index = x.indexOf('cherry');
console.log(index); // 2
let notFoundIndex = x.indexOf('fig');
console.log(notFoundIndex); // -1

//13. includes() method this method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
x = [10, 20, 30, 40, 50];
let has30 = x.includes(30);
console.log(has30); // true
let has60 = x.includes(60);
console.log(has60); // false

//14. find() method this method returns the value of the first element in the array that satisfies the provided testing function.
x = [5, 12, 8, 130, 44];
let foundValue = x.find(function (element) {
    return element > 10;
});
console.log(foundValue); // 12

//15. filter() method this method creates a new array with all elements that pass the test implemented by the provided function.
x = [1, 2, 3, 4, 5, 6];
let filteredArray = x.filter(function (element) {
    return element % 2 === 0;
});
console.log(filteredArray); // [2, 4, 6]

//16. map() method this method creates a new array populated with the results of calling a provided function on every element in the calling array.
x = [1, 2, 3, 4];
let mappedArray = x.map(function (element) {
    return element * 2;
});
console.log(mappedArray); // [2, 4, 6, 8]

//17. reduce() method this method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
x = [1, 2, 3, 4];
let sum = x.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // 10

