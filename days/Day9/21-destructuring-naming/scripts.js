const age = 30;

const person = {
    firstName,
    lastName,
    age,
};

console.log(person.age);

//Destructing

const todo = {
    id: 1,
    title: 'Rafi',
    user: {
        name: 'John'
    }
}

//const { id, title, user } = todo; //curly brac r modde thaka lage destructure r jonno

console.log(id);

const {
    id: todoId,
    title,
    user: { name }
} = todo;

console.log(todoId);


//detructure arrays

const numbers = [23, 67, 33, 44];

//const [first, second] = numbers;

//console.log(first, second);

const [first, second, ...rest] = numbers;
console.log(first, second, rest);


