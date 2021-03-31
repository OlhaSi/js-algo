/* ---- RECURSION ---- */

let array = [3, 4, 6, 7];
let array2 = [ 3, 4, 5, [6, [7], 4], 6, 75];
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
