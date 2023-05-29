'use strict'

const arrLength = prompt('Please enter the length of the array you want to crate')

switch (true) {
    case arrLength === null:
        alert("You've canceled")
        throw ("You've entered the empty string")
    case arrLength.trim() === '':
        alert("You've entered the empty string")
        throw (("You've entered the empty string"))
    case isNaN(+arrLength):
        alert("Length must be a number")
        throw ("Length must be a number")
}

let array = new Array(+arrLength).fill(null)

array = array.map(() => {
    const value = prompt('Enter your value')
//все кроме чисел будет преврашаться в 0
    if (!isNaN(+value)) {
        return +value
    } else return 0
})

console.log(array) //выводит исходный массив

//сортирует массив по возрастанию
array.sort(function (a, b) {
    return a - b;
})
console.log(array)

array.splice(1, 3) //удаляется с 2 элемента по 4
console.log(array)