"use strict";

const smiles = [
    {
        style: ['fa-regular', 'fa-2xl', 'fa-face-smile'],
        id: 1,
        counter: 0,
    },
    {
        style: ['fa-regular', 'fa-2xl', 'fa-handshake'],
        id: 2,
        counter: 0,
    },
    {
        style: ['fa-regular', 'fa-2xl', 'fa-thumbs-up'],
        id: 3,
        counter: 0,
    },
    {
        style: ['fa-regular', 'fa-2xl', 'fa-thumbs-down'],
        id: 4,
        counter: 0,
    },
    {
        style: ['fa-regular', 'fa-2xl', 'fa-hand-spock'],
        id: 5,
        counter: 0,
    },
]

const parent = document.body
const list = document.createElement('ul')
const template = document.querySelector('#smile')


list.classList.add('smile-list')
parent.prepend(list)
smiles.forEach(generateListItems)
list.addEventListener('click', eventHandler)

function generateListItems(item) {
    const clonedTemplate = template.content.cloneNode(true)
    const listItem = document.createElement('li')
    const btn = clonedTemplate.querySelector('.smile-item__btn')
    const counter = clonedTemplate.querySelector('.smile-item__counter')

    listItem.classList.add('smile-list__smile-item', 'smile-item')
    list.append(listItem)

    listItem.setAttribute('data-id', item.id)
    btn.classList.add.apply(btn.classList, item.style)

    counter.textContent = item.counter

    listItem.append(clonedTemplate)
}

function eventHandler(event) {
    const target = event.target
    const counter = target.parentNode.querySelector('.smile-item__counter')
    const id = target.parentNode.dataset.id
    const element = smiles.find(item => item.id === +id)

    if (target.tagName.toLowerCase() === 'a') counter.textContent = ++element.counter
}