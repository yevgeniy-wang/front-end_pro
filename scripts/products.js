"use strict";
const productList = document.querySelector('.product-list')
const template = document.querySelector('#product-item').content


array.forEach(function (productItem) {
    const clonedTemplate = template.cloneNode(true)
    const listItem = document.createElement('li')
    const image = clonedTemplate.querySelector('img')
    const name = clonedTemplate.querySelector('p')
    const price = clonedTemplate.querySelector('h3')

    listItem.classList.add('product-list__product-item')
    listItem.setAttribute('data-id', productItem.id)
    productList.append(listItem)
    listItem.append(clonedTemplate)
    image.src = productItem.image
    name.textContent = productItem.name
    price.textContent = productItem.price
})

productList.addEventListener('click', function (event) {
    const isTargetBuyBtn = event.target.classList.contains('product-container__add-btn')

    if (isTargetBuyBtn) {
        const item = event.target.parentNode
        const index = array.indexOf(array.find(el => el.id === item.dataset.id))

        if (cart.find(item => item.id === array[index].id)) {
            const productNode = cartElement.querySelector(`[data-id="${item.dataset.id}"]`)
            const productItem = cart.find(cartItem => cartItem.id === item.dataset.id)
            const counter = productNode.querySelector('.product__quantity')
            const minusBtn = productNode.querySelector('.fa-minus')
            const price = productNode.querySelector('.product__price')

            counter.textContent = ++productItem.amount
            disableMinusBtn(minusBtn, productItem.amount)
            price.textContent = countItemPrice(productItem.amount, productItem.price)
            finalPrice += productItem.price
            finalPriceElement.textContent = `Final price: ${finalPrice}`
            localStorage.setItem('cart', JSON.stringify(cart))
        } else {
            cart.push(array[index])
            addItemToCart(array[index])
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }
})