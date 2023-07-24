const accordion = document.querySelector('.accordion')
const cart = document.querySelector('.cart')

Cart.setCartItems()
Cart.updatePage()

accordion.addEventListener('submit', (event) => {
    event.preventDefault();

    const position = event.target.closest('.accordion-item')
    const size = position.querySelector('input[name = "size"]:checked').value
    const toppings = position.querySelectorAll('input[name = "topping"]:checked')
    const id = Cart.cartItems.length !== 0 ? Cart.cartItems[Cart.cartItems.length - 1]._id + 1 : 0

    const hamburger = new Hamburger(size, position.id, id)

    toppings.forEach((element) => {
        hamburger.addTopping(element.value)
    })

    Cart.add(hamburger)
});

cart.addEventListener('click', (event) => {
    const parentNode = event.target.parentNode

    if (event.target.classList.contains('bi-x-circle')) {
        Cart.delete(parentNode)
    }

    if (event.target.classList.contains('btn-primary')) {
        Cart.confirmOrder('http://localhost:3000/order', Cart.cartItems)
        Cart.clearCart()
    }
})