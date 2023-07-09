class Human {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    get name() {
        return this._name
    }

    set name(value) {
        if (value.length < 4) {
            alert("Name must be over 4 symbols");
        } else this._name = value
    }

    get age() {
        return this._age
    }

    set age(value) {
        if (value < 18 || isNaN(value)) {
            alert('Incorrect value of age. Age must be over 18 years old')
        } else this._age = value
    }
}

class Auto {
    constructor(model, manufactureYear) {
        this.model = model
        this.manufactureYear = manufactureYear
        this.owner = null
    }

    get model() {
        return this._model
    }

    set model(value) {
        if (value.length < 4) {
            alert("model must be over 4 symbols");
        } else this._model = value
    }

    get manufactureYear() {
        return this._manufactureYear
    }

    set manufactureYear(value) {
        if (value.length < 4 || isNaN(value)) {
            alert('Incorrect value of year of manufacture. Value must be 4 numbers length')
        } else this._manufactureYear = value
    }

    get owner() {
        return this._owner
    }

    set owner(value) {
        this._owner = value
    }
}

const human = createHuman() //создает нового человека
const auto = createAuto(human) // создает новую машину и записывает нового человека владельцем
showCarInfo(auto) // выводит в alert информацию о машине
function createHuman() {
    const name = prompt('Please enter the name of human')
    const age = prompt('Please enter the age of human')

    return new Human(name, age)
}

function createAuto(owner) {
    const model = prompt('Please enter the model of a car')
    const manufactureYear = prompt('Please enter the year of manufacture of a car')
    const auto = new Auto(model, manufactureYear)

    if (owner) {
        auto.owner = owner
    }

    return auto
}

function showCarInfo(car) {
    alert(`
    car model is: ${car.model}
    year of manufacture is: ${car.manufactureYear}
    name of the owner is: ${car.owner.name}
    `)
}