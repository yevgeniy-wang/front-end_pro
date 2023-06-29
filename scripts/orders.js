"use strict";

const ordersElement = document.querySelector('.orders')

orders.forEach(addOrder)

function addOrder(order) {
    const template = document.querySelector('#order').content.cloneNode(true)
    const acc = template.querySelector('.accordion')
    const panel = template.querySelector('.panel')
    const orderWithoutDate = order.slice(0, -1)
    const date = new Date(order[order.length - 1])
    const container = template.querySelector('.orders__container')

    ordersElement.append(template)
    container.setAttribute('data-time', order[order.length - 1])
    acc.textContent = `Price: ${getFinalPrice(orderWithoutDate)} ${date}`
    orderWithoutDate.forEach(product => {
        const par = document.createElement('p')
        par.textContent = `${product.name} x${product.amount}`
        panel.append(par)
    })
}

function getFinalPrice(order) {
    let price = 0
    order.forEach(product => {
        price += countItemPrice(product.amount, product.price)
    })
    return price
}

ordersElement.addEventListener('click', function (event) {
    const target = event.target
    const isTargetAccardion = target.classList.contains('accordion')
    const isTargetTrashBtn = target.classList.contains('fa-trash-can')

    if (isTargetAccardion) {
        const panel = target.nextElementSibling

        target.classList.toggle('active')

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

    if (isTargetTrashBtn) {
        const removingOrder = orders.find(order => order[order.length - 1] === +target.parentNode.dataset.time)
        target.parentNode.remove()
        orders.splice(orders.indexOf(removingOrder), 1)
        localStorage.setItem('orders', JSON.stringify(orders))
    }
})
