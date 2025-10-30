//object spread and methqods

const person1 = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const person2 = {
    name: 'Alice',
    age: 25,
    country: 'USA'
};
// Using Object.assign() to merge objects
const mergedPerson1 = Object.assign({}, person1, person2);
console.log(mergedPerson1); // answer merged object using Object.assign()

// Using spread operator to merge objects
const mergedPerson2 = {...person1, ...person2};
console.log(mergedPerson2); // answer merged object using spread operator

// Cloning an object using Object.assign()
const clonedPerson1 = Object.assign({}, person1);
console.log(clonedPerson1); // answer cloned object using Object.assign()

// Cloning an object using spread operator
const clonedPerson2 = {...person1};
console.log(clonedPerson2); // answer cloned object using spread operator

// Modifying cloned object
clonedPerson2.age = 31;
console.log(clonedPerson2); // answer modified cloned object
console.log(person1); // answer original object remains unchanged
// Adding new property to cloned object
clonedPerson2.country = 'USA';
console.log(clonedPerson2); // answer cloned object with new property

// Deleting property from cloned object
delete clonedPerson2.city;
console.log(clonedPerson2); // answer cloned object after deleting property

// Nested objects with spread operator
const student1 = {
    name: 'Bob',
    age: 22,
    courses: {
        math: 'A',
        science: 'B'
    }
};
const student2 = {
    name: 'Eve',
    age: 23,
    courses: {
        history: 'A',
        english: 'B'
    }
};
const mergedStudent = {
    ...student1,
    courses: {
        ...student1.courses,
        ...student2.courses
    }

};
console.log(mergedStudent); // answer merged student object with nested courses
// Modifying nested object property
mergedStudent.courses.science = 'A';

console.log(mergedStudent); // answer modified merged student object
console.log(student1); // answer original student1 object remains unchanged
console.log(student2); // answer original student2 object remains unchanged
// Adding new property to nested object
mergedStudent.courses.art = 'A';
console.log(mergedStudent); // answer merged student object with new course
// Deleting property from nested object
delete mergedStudent.courses.history;
console.log(mergedStudent); // answer merged student object after deleting course
// Object methods with spread operator
const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    getCarInfo: function() {
        return '${this.brand} ${this.model} (${this.year})';
    }
};

//method
