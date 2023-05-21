'use strict'

let age = prompt('Input your age')
let city = prompt('Input your city')
let sport = prompt('Input your favourite type of sport')

switch (true) {
    case age === null:
        age = "It's shame you haven't entered your age"
        break
    case isNaN(+age): //Допускается только число
        age = 'Your age must be a number'
        break
    case age.trim() === '':
        age = "You've entered the empty string as your age"
        break
    default:
        age = 'You are ' + age + ' years old'
        break
}

switch (true) {
    case city === null:
        city = "It's shame you haven't entered your city"
        break
    case /[0-9]/.test(city): //Допускается только строка без цифр
        city = 'Unacceptable value of city'
        break
    case city.trim() === '':
        city = "You've entered the empty string as your city"
        break
    case city === 'Kyiv':
        city = 'You are living in the capital of Ukraine'
        break
    case city === 'Washington':
        city = 'You are living in the capital of USA'
        break
    case city === 'London':
        city = 'You are living in the capital of UK'
        break
    default:
        city = 'You are living in the city ' + city
        break
}

switch (true){
    case sport === null:
        sport = "It's shame you haven't entered the sport"
        break
    case sport.trim() === '':
        sport = "You've entered the empty string as sport"
        break
    case sport === 'Formula 1':
        sport = "That's cool! Do you wanna be like Max Verstappen?"
        break
    case sport === 'Football':
        sport = "That's cool! Do you wanna be like Lionel Messi?"
        break
    case sport === 'Box':
        sport = "That's cool! Do you wanna be like Mike Tyson?"
        break
    default:
        sport = 'Sport is not found'
        break
}

alert(age + '\n' + city + '\n' + sport)