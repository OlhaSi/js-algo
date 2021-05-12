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

/*// TODO: make a printer function
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

printer(mySuperWord, 2);*/


/* ----- ASYNC AWAIT ----- */

function asynchronus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 2000);
    });
}

// if we don't use <await> we NEED to use .then to get the result of the resolve of Promise object,
// but in that case we well get the result 1 3 immediately and result 2 in the two seconds
async function asawPromise() {
    console.log(1);

    let a = asynchronus();
    a.then(value => console.log(value));

    console.log(3);
}

// if we use <await> we don't need to use .then to get the result of the resolve,
// in that case we well get the result 1 immediately, the result 2 in the two seconds and than 3 immediately,
// so that <await> is actually waiting for the result!!! and then returning it.
async function asawAwait() {
    console.log(1);

    let a = await asynchronus();
    console.log(a);

    console.log(3);
}

asawPromise();
asawAwait();



// TODO: print some text in the callback, promise, async await
// callback
function printText(text, cb) {
    console.log(text);
    if (cb) {
        cb();
    }
}

const printAll = () => {
    printText('Hello', () =>
        printText('world', () =>
            printText('!'))
    )
};

//printAll();

// promise
const printTextP = (text) => {
    return new Promise((resolve, reject) => {
            console.log(text);
            resolve(text);
        }
    );
}

const printAllP = () => {
    printTextP('Hello')
        .then((t) => `${t} world`)
        .then((t) => `${t}!`)
        .then(t => console.log(t))
}

// printAllP();

// async await
const printAllAsyncAwait = async () => {
    await printTextP('1Hello');
    await printTextP('2world');
    await printTextP('3!');
}

printAllAsyncAwait()


// TODO: make a function to schedule a meeting
const hasMeeting = false;

const meetingDetails = {
    name: 'Marketing Meeting',
    time: 'at 1 PM',
    location: 'Zoom'
}

const meeting = () => {
    return new Promise((resolve, reject) => {
        if (!hasMeeting) {
            resolve(meetingDetails);
        } else {
            reject(new Error('Meeting already scheduled'));
        }
    });
}

const addToCalendar = (meetingDetails) => {

    return new Promise((resolve, reject) => {
        const calendar = `${meetingDetails.name} is scheduled on ${meetingDetails.time} on ${meetingDetails.location}`;
        resolve(calendar);
    })
}

// using .then
/*meeting()
    .then(addToCalendar)
    .then(value => {
        console.log(value);
    })

    .catch(reason => {
        console.error(reason);
    })*/

// using async await
async function myMeeting() {
    try {
        const meetingDetails = await meeting();
        const message = await addToCalendar(meetingDetails);
        console.log(message);
        return message;
    } catch (error) {
        console.log(error.message);
    }
}

myMeeting();
