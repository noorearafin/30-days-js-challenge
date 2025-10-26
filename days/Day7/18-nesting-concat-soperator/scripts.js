let x;

const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'broccoli'];

fruits.push('vegetables');
console.log(fruits); // ['apple', 'banana', 'vegetables']

const nestedArray = [fruits, vegetables];
console.log(nestedArray);
// [['apple', 'banana', 'vegetables'], ['carrot', 'broccoli']]

console.log(nestedArray[0][1]); // 'banana'
console.log(nestedArray[1][0]); // 'carrot'

//concat operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = array1.concat(array2);
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

//spread operator
const spreadArray = [...array1, ...array2];
console.log(spreadArray); // [1, 2, 3, 4, 5, 6]

//flattening nested arrays
const arr = [1, [2, 3], [4, [5, 6]]];
const flattenedOnce = arr.flat();
console.log(flattenedOnce); // [1, 2, 3, 4, [5, 6]]

const fullyFlattened = arr.flat(2);
console.log(fullyFlattened); // [1, 2, 3, 4, 5, 6]  

// Combining flattening with spread operator
const nestedArr = [[1, 2], [3, 4], [5, 6]];
const combinedFlattened = [].concat(...nestedArr);
console.log(combinedFlattened); // [1, 2, 3, 4, 5, 6]   
const combinedFlattenedUsingFlat = nestedArr.flat();
console.log(combinedFlattenedUsingFlat); // [1, 2, 3, 4, 5, 6]

// Merging multiple arrays and flattening
const arrayA = [1, 2];
const arrayB = [3, 4];
const arrayC = [5, 6];

const mergedAndFlattened = [].concat(arrayA, arrayB, arrayC);
console.log(mergedAndFlattened); // [1, 2, 3, 4, 5, 6]

const mergedAndFlattenedUsingFlat = [arrayA, arrayB, arrayC].flat();
console.log(mergedAndFlattenedUsingFlat); // [1, 2, 3, 4, 5, 6]