//default parameter

function company(name = 'craftsmen') {
    return name;
}

console.log(company());

//rest paramter

function sum(...number) {
    let total = 0;
    for (const num of number) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 4, 5));

//objects as parameter

function employee(user) {
    return 'The employee id ${user.id} name is ${user.name}';
}

console.log(employee({
    id: 3,
    name: 'rafi'
}));

//array as parameter

function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];
}

getRandom([1, 2, 43, 5, 32, 43, 4]);