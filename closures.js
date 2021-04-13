/* CLOSURES */
{
    let x = 10;
}

// TODO: closure counter function
function counter() {
    let x = 0;
    return function () {
        x++;
        console.log(x);
        return x;
    }
}

console.log(counter().toString());

let someVar = counter();

for (let i = 0; i < 10; i++) {
    someVar();
}


// TODO: closure in an object --- get and check user password
function userObj() {

    let user = {
        name: "Dan",
        password: "pa$$word",
        age: 30
    };

    return {
        getName: function () {
            return user.name
        },
        getAge: function () {
            return user.age;
        },
        birthday: function () {
            return user.age++;
        },
        checkPassword: function (passwordValue) {
            if (passwordValue !== user.password)
                throw Error("Password not valid");

            return "---- Password correct ----";
        },
        changePassword: function (oldPassword, newPassword) {
            if (oldPassword !== user.password)
                throw Error("Old password not correct");

            user.password = newPassword;

            return newPassword;
        }
    }
}

let dan = userObj();

let name = dan.getName();
let age = dan.getAge();
console.log(name);
console.log(age);
console.log(dan.birthday());
console.log(dan.birthday());

console.log(dan.checkPassword("pa$$word"));

console.log(dan.changePassword("pa$$word", "qwert"));
dan.checkPassword("qwert");


// JSON
let person = {
    name: "Ann",
    age: 30,
    car: false
};

let jsoned = JSON.stringify(person);
console.log(jsoned);
let parsed = JSON.parse(jsoned);
console.log(parsed);





/* ------ DEEP COPY, SHELL COPY, Object.assign, SPREAD OPERATOR ----- */

let user = {
    name: "Anna",
    age: 32,
    car: true,
    profession: {
        company: "ngn",
        money: 3000
    },
    house: true
};


// ---- shell copy ----
let aer = [2,4,5,5];
let obj = Object.assign({}, user);      // {...user, profession: aer };

user.profession.money = 45678;
user.age = 5;
console.log(user);
console.log(obj);


//Object.assign(user, {createdAt: Date.now()});
user =
    {...user, createdAt: Date.now(), name: [...aer, 5454] }
console.log(user);


// ---- deep copy ----
let deepCopy = JSON.parse(JSON.stringify(user));
console.log("___________________");
console.log(deepCopy);



/*let arr = ["Hello", 45, "world", "js", 100];
let [test, number, ...rest] = arr;
console.log(test);
console.log(number);
console.log(rest);
function f() {
    let args = Object.values(arguments);
    console.log(...args);
}

f(3, 5, 33, 5, 6);*/
