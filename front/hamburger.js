class Hamburger {
    static SIZE_SMALL = 'small'
    static SIZE_BIG = 'big'
    static STUFFING_CHEESE = 'cheese'
    static STUFFING_SALAD = 'salad'
    static STUFFING_POTATO = 'potato'
    static TOPPING_MAYO = 'mayo'
    static TOPPING_SPICES = 'spices'

    constructor(size, stuffing, id) {
        this._price = 0
        this._calories = 0
        this._toppings = []
        this.size = size
        this.stuffing = stuffing
        this.id = id

    }

    set size(value) {
        if (value !== 'small' && value !== 'big') {
            return
        }

        this._size = value

        switch (value) {
            case 'small':
                this.price = 50
                this.calories = 20
                break
            case 'big':
                this.price = 100
                this.calories = 40
                break
            default:
                alert('no size found')
                break
        }
    }

    set stuffing(value) {
        if (value !== 'cheese' && value !== 'salad' && value !== 'potato') {
            return
        }

        this._stuffing = value

        switch (value) {
            case 'cheese':
                this.price = 10
                this.calories = 20
                break
            case 'salad':
                this.price = 20
                this.calories = 5
                break
            case 'potato':
                this.price = 15
                this.calories = 10
                break
            default:
                alert('no stuffing found')
                break
        }
    }

    addTopping(value) {
        if (value !== 'mayo' && value !== 'spices') {
            return
        }

        this._toppings.push(value)

        switch (value) {
            case 'spices':
                this.price = 15
                break
            case 'mayo':
                this.price = 20
                this.calories = 5
                break
            default:
                alert('no topping found')
                break
        }
    }

    set price(value) {
        this._price += value
    }

    get price() {
        return this._price
    }

    set calories(value) {
        this._calories += value
    }

    get calories() {
        return this._calories
    }

    set id(value) {
        this._id = value
    }

    get id() {
        return this._id
    }

    get toppings() {
        return this._toppings
    }

    get stuffing() {
        return this._stuffing
    }
}