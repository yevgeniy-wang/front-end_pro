'use strict'

let numOrStr = prompt('input number or string');

console.log(numOrStr)

switch (true){
    case numOrStr === null:
        console.log('ви скасували')
        break
    case isNaN(+numOrStr):
        console.log('Number is Ba_NaN')
        break
    case numOrStr.trim() === '':
        console.log('Empty String')
        break
    default:
        console.log('OK!')
        break
}
