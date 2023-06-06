"use strict";

function pow(num, degree) {
    if (num === 1 || degree === 0) return num;
    if (degree > 1) return num * pow(num, --degree);
    if (degree < 1) return 1 / num * pow(num, ++degree);
    return num;
}

console.log(pow(2, 4))