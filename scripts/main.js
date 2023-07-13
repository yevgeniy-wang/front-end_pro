class Hamburger{
    static SIZE_SMALL = 'small'
    static SIZE_BIG = 'big'
    static STUFFING_CHEESE = 'cheese'
    static STUFFING_SALAD = 'salad'
    static STUFFING_POTATO = 'potato'
    static TOPPING_MAYO = 'mayo'
    static TOPPING_SPICES = 'spices'
    constructor(size, stuffing) {
        this._price = 0
        this._calories = 0
        this.size = size
        this.stuffing = stuffing

    }
    set size(value){
        this._size = value

        switch (value){
            case 'small':
                this.price = 50
                this.calories = 20
                break
            case 'big':
                this.price = 100
                this.calories = 40
                break
        }
    }

    set stuffing(value){
        this._stuffing = value

        switch (value){
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
        }
    }

    set price(value){
        this._price += value
    }
    set calories(value){
        this._calories += value
    }
    get calculatePrice (){
        return this._price
    }
    get calculateCalories(){
        return this._calories
    }

    addTopping(value){
        switch (value){
            case 'spices':
                this.price = 15
                break
            case 'mayo':
                this.price = 20
                this.calories = 5
                break
        }
    }
}

const hamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_CHEESE)
hamburger.addTopping(Hamburger.TOPPING_MAYO)
hamburger.addTopping(Hamburger.TOPPING_SPICES)
console.log(hamburger.calculatePrice)
console.log(hamburger.calculateCalories)