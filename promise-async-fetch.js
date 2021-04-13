/* ----- PROMISE ----- */

// TODO: setTimeout without promise
function f(a, b, cb) {
    let res = a + b;
    setTimeout(() => {
        return cb(res);
    }, 1000);
}

f(10, 20, (res) => {
    console.log(res)
});

// TODO: setTimeout using promise
function fPromise(a, b) {
    let res = a + b;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(res);
        }, 1000);
    });
}

fPromise(100, 200)
    .then(value => {
        console.log(value + ` promise`);
    });

// one more example
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Hello from promise`);
    }, 1000);
});

promise
    .then(value => {
        console.log(value);
    });

// .then and .catch
function getSum(a, b) {
    return new Promise((resolve, reject) => {
        let res = a + b;

        res < 20 ? reject(`ERROR`) : resolve(res);

        /* if (res < 20) {
             reject(`ERROR`);
         } else
             resolve(res);*/
    });
}

// promise chain then -> then -> ...
getSum(10, 50)
    .then(value => {
        console.log(value);

        return value + 100;
    })

    .then(value => {
        console.log(value);

        return value + 5;
    })

    .then(value => {
        console.log(value);
    })

    .catch(reason => {
        console.error(reason);
    });

// TODO: make a printer function
let mySuperWord = 'I like JS';

function printer(stringToPrint, i) {
    let randomTime = Math.floor(Math.random() * 1000);

    setTimeout(() => {

        let sliced = stringToPrint.slice(0, i);

        console.clear();
        console.log(sliced);

        if (i <= stringToPrint.length) {
            printer(stringToPrint, ++i);
        }
    }, randomTime);

    // for (let i = 1; i <= stringToPrint.length; i++) {
    //     //console.log(stringToPrint[i]);
    //     let sliced = stringToPrint.slice(0, i);
    //     console.log(sliced);
    // }
}

printer(mySuperWord, 2);


/* ----- ASYNC AWAIT ----- */

function asynchronus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 2000);
    });
}

async function asaw() {
    console.log(1);

    let a = await asynchronus();
    console.log(a);

    console.log(3);
}

asaw();
