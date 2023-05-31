"use strict";

const array = [1, 2, 3, 4, 5, 6, 7];
const array2 = ['aaa', 'bbb', 'ccc', 'abc', 'bac', 'cab'];

function removeElement(array, value) {
    array.splice(array.indexOf(value), 1)
    return array
}

console.log(removeElement(array, 5))
console.log(removeElement(array2, 'bbb'))