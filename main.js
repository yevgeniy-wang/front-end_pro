"use strict";

const phoneCalls = {
    phoneNumbers: [],
    cacheNumbers: function (callback, ...newNumbers) { //можно передать от одного до множества номеров
        const storage = this.phoneNumbers

        callback(storage, newNumbers)

        if (storage.length > 10) {
            storage.splice(0, storage.length - 10)
        }
    }
}

function pushNumber(array, numbers) {
    array.push(...numbers)
}

phoneCalls.cacheNumbers(pushNumber, 111111)
phoneCalls.cacheNumbers(pushNumber, 222222)
phoneCalls.cacheNumbers(pushNumber, 333333, 444444)
phoneCalls.cacheNumbers(pushNumber, 555555, 666666)
phoneCalls.cacheNumbers(pushNumber, 777777, 888888, 999999)
phoneCalls.cacheNumbers(pushNumber, 101010, 121212, 131313)
phoneCalls.cacheNumbers(pushNumber, 141414, 151515, 161616, 171717)

console.log(phoneCalls.phoneNumbers)
