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
