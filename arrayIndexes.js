// TODO: change index i with the next index i+1 in array
function changeIndex(array, i) {

    // check inputs and throw errors
    if (!Array.isArray(array) && i !== 'number') {
        throw new Error("Bad request");
    }
    if (i < 0 || i > array.length - 1) {
        throw new Error("i is not correct");
    }

    let firstIndex = array[0];
    let lastIndex = array[array.length - 1];

    let currentIndex = array[i];
    let nextIndex = array[i + 1];

    // check i statement
    if (i === lastIndex) {
        array[i] = firstIndex;
        array[0] = currentIndex;
    } else {
        array[i] = nextIndex;
        array[i + 1] = currentIndex;
    }


    return array;
}

console.log(changeIndex([23, 54, 76, 3, 4], 0));
