/* ----- OOP ----- */

// TODO: create a class Human with method greeting
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

let sam = new Human('Sam', 34);
let ann = new Human('Ann', 24);
console.log(sam);
sam.greeting();

// TODO: create a class Developer which extends Human
class Developer extends Human {
    constructor(name, age, skill) {
        super(name, age);
        this.skill = skill;
    }
}

let mike = new Developer('Mike', 30, 'js');
mike.greeting();

// TODO: create a class TeamLead which extends Developer and has own method greeting and raiseReward
class TeamLead extends Developer {
    constructor(name, age, skill, project, reward) {
        super(name, age, skill);
        this._project = project;
        this.reward = reward;
    }

    get project() {
        return this._project;
    }

    set project(value) {
        this._project = value;
    }

    // own method - overriding
    greeting() {
        console.log(`Hello guys, my name is ${this.name} and I am the ${this.project} project lead`);
    }

    // get up to 10% more money
    raiseReward(bonus) {
        let tenPercent = this.reward * 0.1;

        if (bonus > tenPercent) {
            throw Error('This is too much');
        } else
            return this.reward += bonus;
    }
}

let paul = new TeamLead('Paul', 35, 'java', 'Ajax', 2000);
paul.greeting();
console.log(paul.raiseReward(200));
console.log(paul.project);
paul.project = 'ABC';
console.log(paul.project);
console.log(paul);



// TODO: create class User and method sort for all of his fields
class User {
    constructor(name, surname, age, experience) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.experience = experience;
    }
}

let anna = new User('Anna', 'Kurt', 20, 1);
let dan = new User('Dan', 'Hanks', 23, 3);
let kurt = new User('Kurt', 'Murt', 30, 10);
let mary = new User('Mary', 'Semen', 28, 5);
let sara = new User('Sara', 'Parts', 29, 4);

let users = [anna, dan, kurt, mary, sara];

function sort(users = [], field, way) {
    let arrayOfValues = users.map(user => user[field]);

    if (way.toUpperCase() === "DESC") {
        arrayOfValues = arrayOfValues.sort((a, b) => {
            if (a > b) {
                return -1;
            }
            if (b > a) {
                return 1;
            }
            return 0;
        })
    } else {
        arrayOfValues = arrayOfValues.sort((a, b) => {
            if (b > a) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        })
    }
    return arrayOfValues;
}

let sorted = sort(users, 'name', "desc");
console.log(sorted);
