//function

function person(name, age) {
    console.log("person name is" + name + "and age is" + age);
}

person('rafi', 20); //argument

function phone(model, price) {
    console.log(price, model);
    return model, price;
}

const main = phone('Iphone 13', 67000);

console.log(main);