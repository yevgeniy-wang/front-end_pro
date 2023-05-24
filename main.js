"use strict";

const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]
const positive = array.filter((num) => num > 0)
const negative = array.filter((num) => num < 0)
const positiveEven = positive.filter((num) => num % 2 === 0)
const positiveOdd = positive.filter((num) => num % 2 === 1)

console.log(positive)
console.log(negative)
console.log(positiveEven)
console.log(positiveOdd)

const sum = (a, b) => a + b


//1.Знайти суму та кількість позитивних елементів.
console.log('Cумма позитивных элементов равна ' + positive.reduce(sum) + ' и их количество: ' + positive.length)

//2. Знайти мінімальний елемент масиву та його порядковий номер.
const minNumber = (a, b) => a < b ? a : b
const ordinalMinNumber = array.indexOf(array.reduce(minNumber)) + 1
console.log('Минимальный элемент равен ' + array.reduce(minNumber) + ' и его порядковый номер(не индекс): ' + ordinalMinNumber)

//3. Знайти максимальний елемент масиву та його порядковий номер.
const maxNumber = (a, b) => a > b ? a : b
const ordinalMaxNumber = array.indexOf(array.reduce(maxNumber)) + 1
console.log('Максимальный элемент равен ' + array.reduce(maxNumber) + ' и его порядковый номер(не индекс): ' + ordinalMaxNumber)


//4. Визначити кількість негативних елементів.
console.log('Количество негативных элементов: ' + negative.length)

//5.Знайти кількість непарних позитивних елементів.
console.log('Количество нечетных позитивных элементов: ' + positiveOdd.length)

//6.Знайти кількість парних позитивних елементів.
console.log('Количество четных позитивных элементов: ' + positiveEven.length)

//7. Знайти суму парних позитивних елементів.
console.log('Cумма четных позитивных элементов равна ' + positiveEven.reduce(sum))

//8. Знайти суму непарних позитивних елементів.
console.log('Cумма нечетных позитивных элементов равна ' + positiveOdd.reduce(sum))

//9. Знайти добуток позитивних елементів.
console.log('Произведение позитивных элементов равна ' + positive.reduce((a, b) => a * b))

//10. Знайти найбільший серед елементів масиву, ост альні обнулити.
const newArray = array.fill(0, 0, array.indexOf(array.reduce(maxNumber))).fill(0, ordinalMaxNumber, array.length)
console.log(newArray)