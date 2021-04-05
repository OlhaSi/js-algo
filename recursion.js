/* ---- RECURSION ---- */

let array = [3, 4, 6, 7];
let array2 = [3, 4, 5, [6, [7], 4], 6, 75];
let i = 0;

// TODO: print array
function recursion() {
    if (i < array.length) {

        console.log(array[i]);
        i++;
        recursion();
    }
}

console.log(recursion());

// TODO: print nested array
function recursion2(arr) {
    if (arr.length > 0) {

        if (Array.isArray(arr[0])) {
            recursion2(arr[0]);
        } else {
            console.log(arr[0]);
        }

        arr.shift();
        recursion2(arr);
    }
}

console.log(recursion2(array2));

// second variant
function printArray(arrayToOpen) {
    if (!Array.isArray(arrayToOpen))
        return;

    for (let i = 0; i < arrayToOpen.length; i++) {
        let value = arrayToOpen[i];

        if (Array.isArray(value)) {
            printArray(value);
            continue;
        }

        if (typeof value === 'object' && value !== null) {
            let arrayOfObj = Object.values(value);
            printArray(arrayOfObj);
            continue;
        }

        console.log(value);
    }
}

console.log('**************');
let arrayToOpen = [3, 4, 5, [6, [7], 4], 6, null, {name: 'Dan', car: true}, 75];

printArray(arrayToOpen);
console.log('**************');


// TODO: get factorial of number
console.time('my');

function factorial(number) {
    let res = 1;
    for (let i = 1; i <= number; i++) {
        res *= i;
    }
    return res;
}

console.log(factorial(3));
console.timeEnd('my');

// TODO: get factorial using recursion
console.time('my1');

function factorial2(n) {
    if (n > 1) {
        return n * (factorial2(n - 1)); // 5 * 4 * 3 * 2 * 1
    }
    return 1;

    // return (n > 1) ? (n * (factorial2(n - 1))) : 1;
}

console.log(factorial2(0));
console.timeEnd('my1');


/* ----- CALLBACK ----- */

// TODO: get sum of numbers using callback
function getSum(n1, n2, cb) {
    let res = n1 + n2;
    return cb(res);
}

let r = getSum(5, 10, value => value * 2);
console.log(r);

// callback can get an outside function
function resultLoger(res) {
    return res;
}

let res = getSum(2, 10, resultLoger); //do not execute the function (), because it is a parameter cb in function getSum
console.log(res);


// TODO: make a function cleanRoom using the callback
function cleanRoom(isClean, cb) {
    let reward = 100;

    if (isClean) {
        return cb(reward);
    }

    throw Error("You have to clean the room");
}

console.log(cleanRoom(true, cb => cb));
console.log("__________________");


// TODO: function clean using cb with parameters -> error, time, reward
function clean(isClean, cb) {
    let reward = 1000;

    if (isClean) {
        return cb(null, new Date().toISOString(), reward);
    } else
        return cb("Room is not clean", new Date().toISOString(), null);
}

console.log(clean(true, (error, time, reward) => {
    if (error) {
        throw new Error(`${error} at ${time}`);
    }
    if (!error) {
        return `Your reward is ${reward} \n${time}`;
    }
}));


/* ----- FIBONACCI----- */

// TODO: get fibonacci
function fibonacci(number) {
    let res = [1, 1];
    for (let i = 2; i < number; i++) {
        res[i] = res[i - 1] + res[i - 2];
        // res.push(res[i - 1] + res[i - 2]);
    }

    console.log(res);
    return res[number - 1];
}

console.log(fibonacci(4));
