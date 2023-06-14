"use strict";

const list = [
    {li: '1'},
    {li: [{li: '2.1'}, {li: '2.2'}]},
    {li: [{li: '3.11'}, {li: [{li: '3.22'}, {li: '3.23'}]}]},
]

function generateList(array, parent = document.body) {
    const list = document.createElement('ul')
    list.classList.add('list-group')
    parent.prepend(list)
    generateListItems(array)

    function generateListItems(array) {
        array.forEach(element => {
            const isArray = Array.isArray(element.li)
            const listItem = document.createElement('li')
            listItem.classList.add('list-group-item')
            list.append(listItem)

            if (isArray) {
                generateList(element.li, listItem)
            } else listItem.textContent = element.li
        })
    }
}

generateList(list)

// const numbers = [1, [2.1, [2.21, 2.22], 2.3], 3, 4, 5]
//
// function generateList(array, parent = document.body) {
//     const list = document.createElement('ul')
//     list.classList.add('list-group')
//     parent.prepend(list)
//     generateListItems(array)
//
//     function generateListItems(array) {
//         array.forEach(element => {
//             const isArray = Array.isArray(element)
//             const listItem = document.createElement('li')
//             listItem.classList.add('list-group-item')
//             list.append(listItem)
//
//             if (isArray) {
//                 generateList(element, listItem)
//             } else listItem.textContent = element
//         })
//     }
// }
//
// generateList(numbers)