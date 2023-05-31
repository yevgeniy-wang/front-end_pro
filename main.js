"use strict";

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'

function generateKey(length, characters) {
    let randomString = ''
    for (let i = 0; i < length; i++) { //при каждой итерации выбирает случайный символ из строки characters и добавляет в пустую строку
        const index = Math.floor(Math.random() * characters.length)
        randomString += characters.substring(index, index + 1)
    }
    return randomString
}

console.log(generateKey(10, characters))
console.log(generateKey(18, characters))
console.log(generateKey(34, characters))