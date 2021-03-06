
/* DESTRUCTURING */

/*// TODO: get object keys
let user = {
    name: "Dan",
    age: 25,
    email: "dan@gmail.com",
    password: "12345",
    company: "ABC",
    car: false,
    house: true
};

let name = "Kate";

// (name: userName) <- how to rename properties in an object (destructuring)
let {name: userName, age, company} = user;
console.log(name);
console.log(userName);
console.log(age);*/

// destructuring with an object
let dana = {
    name: 'Dana',
    age: 23,
    car: false,
    skills: ['c', 'js', 'react']
};

const {name, age, ...other} = dana;
console.log(name);
console.log(age);
console.log(other);

// destructuring with an array
let names = ['Roman', 'Kate', 'Dana', 'Sandra'];

let [n1, n2, ...otherNames] = names;
console.log(n1);
console.log(otherNames);

// structuring -- open an obj an and the new property
let someObj = {...dana, pet: 'dog'};
console.log(someObj);
console.log('____________________________');

// TODO: get array elements

let arr = ["Hello", 45, "world", "js", 100];

let [greeting, num, strWorld, strJS, num2] = arr;
console.log(greeting + ' ' + num);

let [, , , text] = arr;
console.log(text);



/* SPREAD OPERATOR */

let [test, number, ...spread] = arr;
console.log(test);
console.log(number);
console.log(spread);

// numbers are spread, and not in the array
function f() {
    let args = Object.values(arguments);
    console.log(...args);
}

f(3, 5, 33, 5, 6);



/* STRUCTURING */

let surname = "Andy";
let lastName = "Peterson";

// if key and value have the same name like ("surname: surname") => its enough to use only key ("surname")
let person = {
    surname,
    lastName
};
console.log(person);
