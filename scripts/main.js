"use strict";

const photos = [
    'https://media.formula1.com/image/upload/content/dam/fom-website/manual/Misc/2022manual/GettyImages-1437759309.jpg.transform/9col/image.jpg',
    'https://media.formula1.com/image/upload/content/dam/fom-website/sutton/2022/AbuDhabi/Sunday/1443001254.jpg.transform/9col/image.jpg',
    'https://media.formula1.com/image/upload/content/dam/fom-website/sutton/2022/Brazil/Saturday/1441020619.jpg.transform/9col/image.jpg',
    'https://media.formula1.com/image/upload/content/dam/fom-website/sutton/2022/Bahrain/Sunday/1386703905.jpg.transform/9col/image.jpg',
    'https://media.formula1.com/image/upload/content/dam/fom-website/sutton/2022/Brazil/Saturday/1441035921.jpg.transform/9col/image.jpg',
]

const slider = document.querySelector('.slider')
const image = document.createElement('img')
const prevBtn = document.createElement('button')
const nextBtn = prevBtn.cloneNode(true)
let index = 0

generateSlider()

slider.addEventListener('click', eventHandler)

function generateSlider() {
    prevBtn.classList.add('slider__prev-btn')
    prevBtn.innerHTML = '<i class ="fa-solid fa-chevron-left fa-2xl"></i>'
    nextBtn.classList.add('slider__next-btn')
    nextBtn.innerHTML = '<i class="fa-solid fa-chevron-right fa-2xl"></i>'
    image.classList.add('slider__image')
    image.alt = 'some image'

    slider.append(prevBtn, image, nextBtn)

    image.src = photos[index]
}

function eventHandler(event) {
    const targetClassList = event.target.classList

    if (targetClassList.contains('slider__prev-btn') || targetClassList.contains('fa-chevron-left')) {
        index--
        hideAndDisplayBtns(photos)
    } else if (targetClassList.contains('slider__next-btn') || targetClassList.contains('fa-chevron-right')) {
        index++
        hideAndDisplayBtns(photos)
    }
}

function hideAndDisplayBtns(array) {
    if (index === 0) prevBtn.style.display = 'none'
    if (index !== 0) {
        prevBtn.style.display = 'block'
        nextBtn.style.display = 'block'
    }
    if (index === array.length - 1) nextBtn.style.display = 'none'

    image.src = photos[index]
}