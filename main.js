"use strict";

const goods = [
    {
        name: 'table',
        category: 'furniture',
        amount: 6,
        price: 2000,
    },
    {
        name: 'chair',
        category: 'furniture',
        amount: 10,
        price: 1000,
    },
    {
        name: 'TV',
        category: 'electronics',
        amount: 4,
        price: 4000,
    },
    {
        name: 'PlayStation',
        category: 'electronics',
        amount: 3,
        price: 5000,
    },
    {
        name: 'sink',
        category: 'plumbing',
        amount: 6,
        price: 2000,
    },
    {
        name: 'toilet',
        category: 'plumbing',
        amount: 6,
        price: 2500,
    },
]

function filterByCategory(array, category){
    const filteredArrayByCategory = array.filter(element => element.category === category)
    if (filteredArrayByCategory === 0){
        alert('Categories not found')
    } else {
        console.log('Goods from chosen category:') //для удобства товары найденой категории выводяться в консоль вместе с индексом
        filteredArrayByCategory.forEach((element, index) => console.log(index + ':' + element.name + ' price: ' + element.price))
        return filteredArrayByCategory
    }
}

function findByID (array, id){
    const searchingItem = filteredGoods.find((element, index) => index === +id)
    if (isNaN(id) ||  id === '' || id === null){
        alert('Incorrect value of index')
    } else if (!searchingItem){
        alert('good is not found by the provided index')
    } else return searchingItem
}

function calculateFinalPrice(item, amount){
    if (isNaN(amount) ||  amount === '' || amount === null){
        alert('Incorrect value of amount')
    } else if (item.amount < amount){
        alert("We're sorry but we don't have so much in stock")
    } else {
        const finalPrice = item.price * amount
        return finalPrice
    }
}

function calculateDiscount(price){
    if (price >= 10000){
        price *= 0.8
        alert('We are happy to inform you have 20% discount. Final price is: ' + price)
        return price
    } else return price
}


goods.forEach(element => console.log(element)) //выводит все товары, каждый с новой строки

const searchingCategory = prompt('Enter the category')
const filteredGoods = filterByCategory(goods, searchingCategory)
const searchingIndex = prompt('Enter the id of a good')
const searchingGood = findByID(filteredGoods, searchingIndex)

if (searchingGood){
    const amount = prompt('Enter the amount of goods you want to buy')
    const finalPrice = calculateFinalPrice(searchingGood, amount)
    const priceWithDiscount = calculateDiscount(finalPrice)
}