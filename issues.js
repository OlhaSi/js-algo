// TODO: num contains a number from 1 to 4, if 1 - winter, 2 - spring ...
let season = Math.floor(Math.random() * (4 - 1) + 1);

function findSeason() {
    switch (season) {
        case 1:
            console.log("winter");
            break;
        case 2:
            console.log("spring");
            break;
        case 3:
            console.log("summer");
            break;
        case 4:
            console.log("autumn");
            break;
        default:
            console.log("its not a season");
            break;
    }
}

//console.log(findSeason());

// TODO: num contains a number from 1 to 12, if 1 - january, 2 - february ...
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let month = getRandomInt(1, 12);

function findMonth() {
    let res = 0;
    if (month === 1) {
        res = "january";
    } else if (month === 2) {
        res = "february";
    } else if (month === 3) {
        res = "march";
    } else if (month === 4) {
        res = "april";
    } else if (month === 5) {
        res = "may";
    } else if (month === 6) {
        res = "june";
    } else if (month === 7) {
        res = "july";
    } else if (month === 8) {
        res = "august";
    } else if (month === 9) {
        res = "september";
    } else if (month === 10) {
        res = "october";
    } else if (month === 11) {
//        res = "november";
    } else if (month === 12) {
        res = "december";
    }
    return res;
}

//console.log(findMonth());

// TODO: reverse a number not using .reverse
let reversedNum = 0;

function getReversedNum(num) {
    while (num > 0) {
        let lastNumber = num % 10;
        reversedNum = reversedNum * 10 + lastNumber;
        num = Math.floor(num / 10);
    }
    return reversedNum;
}

console.log(getReversedNum(946));

// TODO: make a redlight
let color = "BlÜe";
console.log(color.toLowerCase());

for (let i = 0; i < color.length; i++) {
    const colorElement = color[i];

}

// TODO: add 50 even numbers to the array
function addEvenNumbers() {
    let arr = [];
    while (arr.length <= 50) {
        let random = Math.floor(Math.random() * 50);
        if (random % 2 === 0) {
            arr.push(random);
        }
    }
    return arr;
}

console.log(addEvenNumbers());

// TODO: add 50 odd numbers to the array
function addOddNumbers() {
    let arr = [];
    while (arr.length <= 50) {
        let random = Math.floor(Math.random() * 50);
        if (random % 2 !== 0) {
            arr.push(random);
        }
    }
    return arr;
}

console.log(addOddNumbers());

// TODO: get numbers from even indexes in array
let array = [13, 25, 1, 3, 31, 13, 27, 49, 47, 49, 23];

function getNumbers() {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            arr.push(array[i]);
        }
    }
    return arr;
}

console.log(getNumbers());

/*array.forEach((value, index) => {
    if (index %2 === 0) {
        console.log(value);
    }
})*/

// TODO: sum all elements in the array
function sumElements(array) {
    if (!Array.isArray(array)) throw Error("Not array");

    let sum = 0;

    for (let el of array) {
        sum += el;
    }

    return sum;
}

let res = sumElements([1, 2, 3, 4, 5]);
console.log(res);
