"use strict";

const orders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : []
let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
const cartElement = document.querySelector('.cart')
const finalPriceElement = cartElement.querySelector('.cart__final-price')
let finalPrice = +finalPriceElement.textContent

cart.forEach(addItemToCart)
function addItemToCart(cartItem){
    const template = document.querySelector('#product').content.cloneNode(true)
    const product = template.querySelector('.product-container')
    const plus = template.querySelector('.fa-plus')
    const minus = template.querySelector('.fa-minus')
    const trash = template.querySelector('.fa-trash-can')
    const productPrice = template.querySelector('.product__price')
    const productName = template.querySelector('.product__name')
    const counter = template.querySelector('.product__quantity')

    const array = [product, plus, minus, trash]

    array.forEach(el => el.setAttribute('data-id', cartItem.id))
    cartElement.insertBefore(template, finalPriceElement)

    productName.textContent = cartItem.name
    counter.textContent = cartItem.amount
    productPrice.textContent = countItemPrice(cartItem.amount, cartItem.price)

    finalPrice += +productPrice.textContent
    finalPriceElement.textContent = `Final price: ${finalPrice}`
    disableMinusBtn(minus, cartItem.amount)
}
function countItemPrice(amount, initialPrice){
    return amount * initialPrice
}

function disableMinusBtn(minusBtn, amount){
    if (amount === 1){
        minusBtn.disabled = true
    }else{
        minusBtn.disabled = false
    }
}

cartElement.addEventListener('click', function (event){
    const target = event.target
    const productNode = cartElement.querySelector(`[data-id="${target.dataset.id}"]`)
    const productItem = cart.find(cartItem => cartItem.id === target.dataset.id)
    const isTargetCartBtn = target.classList.contains('cart__btn')
    const isTargetPlusBtn = target.classList.contains('fa-plus')
    const isTargetMinusBtn = target.classList.contains('fa-minus')
    const isTargetTrashBtn = target.classList.contains('fa-trash-can')
    const isTargetBuyBtn = target.classList.contains('cart__buy-btn')
    let counter
    let minusBtn
    let price

    if (productNode) {
        counter = productNode.querySelector('.product__quantity')
        minusBtn = productNode.querySelector('.fa-minus')
        price = productNode.querySelector('.product__price')

    }


    if (isTargetCartBtn){ // close or open cart
        target.classList.toggle('fa-cart-shopping')
        target.classList.toggle('fa-x')
        cartElement.classList.toggle('cart--closed')
    }

     if(isTargetPlusBtn){ //add amount of product to cart
         counter.textContent = ++productItem.amount
         disableMinusBtn(minusBtn,productItem.amount)
         price.textContent = countItemPrice(productItem.amount, productItem.price)
         finalPrice += productItem.price
         finalPriceElement.textContent = `Final price: ${finalPrice}`
         localStorage.setItem('cart', JSON.stringify(cart))

     }else if(isTargetMinusBtn){ //minus amount of product to cart
         counter.textContent = --productItem.amount
         disableMinusBtn(minusBtn,productItem.amount)
         price.textContent = countItemPrice(productItem.amount, productItem.price)
         finalPrice -= productItem.price
         finalPriceElement.textContent = `Final price: ${finalPrice}`
         localStorage.setItem('cart', JSON.stringify(cart))
     }

     if (isTargetTrashBtn){ //delete product from cart
         productNode.remove()
         cart.splice(cart.indexOf(productItem), 1)
         finalPrice -= +price.textContent
         finalPriceElement.textContent = `Final price: ${finalPrice}`
         localStorage.setItem('cart', JSON.stringify(cart))
     }

     if (isTargetBuyBtn){ //confirm order
         const products = document.querySelectorAll('.product-container')
         if (cart.length >= 1){
             cart.push(Date.now())
             orders.push(cart)
             finalPrice = 0
             cart = []
             localStorage.removeItem('cart')
             localStorage.setItem('orders', JSON.stringify(orders))
             products.forEach(product=> product.remove())
             finalPriceElement.textContent = `Final price: ${finalPrice}`
         }
     }
})
