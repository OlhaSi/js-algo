let arr = [42, 54, 2, 6, 71, 3, 60, 8, 4];

// forEach
arr.forEach((value, index, array) => console.log(value));

// filter
let filteredArr = arr.filter(value => value % 2 === 0);
console.log(filteredArr);

// map
let mappedArr = arr.map(value => value * 2);
console.log(mappedArr);

let arrayObj = [
    {
        name: "Olha",
        age: 25
    },
    {
        name: "Andrii",
        age: 28,
        toy: false
    },
    {
        name: "Leo",
        age: 3,
        toy: true
    }];

let getAges = arrayObj.filter(value => value.age > 10);
console.log(getAges);

let getAges2 = arrayObj.map(value => value.age);
console.log(getAges2);

// some every
let some = arr.some(value => typeof value === 'string');
console.log(some);

// find
let find = arrayObj.find(value => value.toy);
console.log(find);

// lastIndexOf
console.log(arr.lastIndexOf(2, 5));

// sort
console.log(arr.sort((a, b) => a - b));

console.log(arrayObj.sort((a, b) => a.age - b.age));

let sorted = arrayObj.sort(function (obj1, obj2) {
    if (obj1.name > obj2.name) {
        return 1;
    }
    if (obj1.name < obj2.name) {
        return -1;
    }
    if (obj1.name === obj2.name) {
        return 0;
    }
});
console.log(sorted);

// reduce
let reduce = arr.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log(reduce);

let reduceObj = arrayObj.reduce(function (prevValue, currValue) {
    return prevValue + currValue.age;
}, 0);
console.log(reduceObj);

// slice
let str = "Hello java script";
let s = str.slice(6, 8);
console.log(s);

// splice
let array = [1, 2, 3, 4, 5, 6];
let splice = array.splice(2, 2);
console.log(splice);
console.log(array);

splice.splice(1, 0, 12, 34);
console.log(splice);
