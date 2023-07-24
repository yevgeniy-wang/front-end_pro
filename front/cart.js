class Cart {
    static cartItems = []

    static setCartItems() {
        const cart = localStorage.getItem('cart')

        if (!cart) return

        this.cartItems = JSON.parse(cart).map((item) => {
            const hamburger = new Hamburger(item._size, item._stuffing, item._id)
            item._toppings.forEach((topping) => hamburger.addTopping(topping))
            return hamburger
        })
    }

    static calculateCartPrice() {
        const finalPrice = document.querySelector('.final-price')
        const price = this.cartItems.reduce((a, b) => a + b.price, 0)
        finalPrice.textContent = `Final price: ${price}`
    }

    static setLocalStorage(key, value) {
        localStorage.setItem('cart', JSON.stringify(value))
    }

    static addItemToPage(item) {
        const finalPrice = document.querySelector('.final-price')
        const cart = document.querySelector('.cart')
        const template = document.querySelector('#cartItem').cloneNode(true).content
        const cartItem = template.querySelector('.cart-item')
        const name = template.querySelector('.name')
        const toppings = template.querySelector('.toppings')
        const priceAndCalories = template.querySelector('.price-calories')

        name.textContent = `Hamburger with ${item.stuffing}`
        toppings.textContent = `Toppings: ${item.toppings.join(', ')}`
        priceAndCalories.textContent = `Price: ${item.price}, calories: ${item.calories}`
        cartItem.setAttribute('data-id', item.id)

        cart.insertBefore(template, finalPrice)
    }

    static add(value) {
        this.cartItems.push(value)
        this.setLocalStorage('cart', this.cartItems)
        this.addItemToPage(value)
        this.calculateCartPrice()
    }

    static updatePage() {
        this.cartItems.forEach(this.addItemToPage)
        this.calculateCartPrice()
    }

    static delete(cartItem) {
        const searchingElement = this.cartItems.find(element => element.id === +cartItem.dataset.id)

        cartItem.remove()
        this.cartItems.splice(this.cartItems.indexOf(searchingElement), 1)
        this.setLocalStorage('cart', this.cartItems)
        this.calculateCartPrice()

    }

    static clearCart() {
        this.cartItems.forEach((cartItem) => {
            const cartItemElement = document.querySelector('.cart-item')
            const finalPrice = document.querySelector('.final-price')
            cartItemElement.remove()
            localStorage.removeItem('cart')
            finalPrice.textContent = `Final price: 0`
        })
    }

    static async confirmOrder(url, body) {
        try {
            const response = await fetch(url,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(body)
                })


            return response

        } catch (err) {
            console.error(err)
        }
    }
}