"use strict";

function pow(num, degree) {
    if (degree === 0) return 1
    if (num === 1 || num === 0) return num;
    if (degree > 1) return num * pow(num, --degree);
    if (degree < 1) return 1 / num * pow(num, ++degree);
    return num;
}

console.log(pow(2, 3))
console.log(pow(2, -3))