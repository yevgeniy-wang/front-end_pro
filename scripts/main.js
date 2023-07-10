class Resident {
    constructor(name) {
        this.name = name
    }

    get name() {
        return this._name
    }

    set name(value) {
        if (value.length < 4) {
            alert("Name must be over 4 symbols");
        } else this._name = value
    }
}

class Apartment {
    constructor(residents, apartmentNumber) {
        this.residents = residents
        this.apartmentNumber = apartmentNumber
    }

    get residents() {
        return this._residents
    }

    set residents(value) {
        if (!value.length) {
            alert("Residents can not be less then 1");
        } else this._residents = value
    }

    get apartmentNumber() {
        return this._apartmentNumber
    }

    set apartmentNumber(value) {
        if (!value || isNaN(value)) {
            alert("Residents can not be less then 1");
        } else this._apartmentNumber = value
    }
}

class House {
    constructor(apartments) {
        this.apartments = apartments
    }

    get apartments() {
        return this._apartments
    }

    set apartments(value) {
        if (!value.length) {
            alert("Apartments can not be less then 1");
        } else this._apartments = value
    }
}

function createHouse() { //сначала создается объект House, с количеством квартир заданным пользователем
    const apartmentsAmount = prompt('Please enter the apartments amount in the house')
    const apartments = new Array(+apartmentsAmount).fill(null)
    return new House(apartments.map(createApartment))
}

function createApartment(value, index) {// потом для каждой квартиры создаются жильцы, в количестве заданным пользователем. Также присваивается номер квартиры
    const apartmentNumber = index + 1
    const residentsAmount = prompt(`Please enter the residents amount in the apartment number ${apartmentNumber}`)
    const residents = new Array(+residentsAmount).fill(null)
    return new Apartment(residents.map(createResident), apartmentNumber)
}

function createResident() { // каждому жильцу задается имя
    const name = prompt('Please enter the resident name')
    return new Resident(name)
}

const house = createHouse()
console.log(house.apartments)