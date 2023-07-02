"use strict";


const slider = document.querySelector('.slider')
let index = 0

getRequest('https://swapi.dev/api/planets')
    .then(data => {
        console.log(data.results)
        generateSlider(slider, data.results)
        slider.addEventListener('click', event => {
            eventHandler(event, slider, data.results)
        })
    })
    .catch(error => {
        alert(error)
        console.error(error)
    })

async function getRequest(url) {
    const response = await fetch(url, {
        method: 'GET'
    })
    return await response.json()
}

function generateSlider(slider, planets) { // generates the slider
    const prevBtn = document.createElement('button')
    const nextBtn = prevBtn.cloneNode(true)
    const container = document.createElement('div')
    const planetName = document.createElement('p')
    const planetPopulation = document.createElement('p')
    const planetTerrain = document.createElement('p')
    const planetGravity = document.createElement('p')


    prevBtn.classList.add('slider__prev-btn')
    prevBtn.innerHTML = '<i class ="fa-solid fa-chevron-left fa-2xl"></i>'
    nextBtn.classList.add('slider__next-btn')
    nextBtn.innerHTML = '<i class="fa-solid fa-chevron-right fa-2xl"></i>'
    container.classList.add('slider__planet-container', 'planet-container')

    slider.append(prevBtn, container, nextBtn)

    planetName.classList.add('planet-container__name')
    planetPopulation.classList.add('planet-container__population')
    planetTerrain.classList.add('planet-container__terrain')
    planetGravity.classList.add('planet-container__gravity')

    container.append(planetName, planetPopulation, planetTerrain, planetGravity)
    updateContent(planets, index)
}

function eventHandler(event, slider, planets) {

    const isTargetPrevBtn = event.target.classList.contains('slider__prev-btn')
    const isTargetNextBtn = event.target.classList.contains('slider__next-btn')
    const isTargetChevronLeft = event.target.classList.contains('fa-chevron-left')
    const isTargetChevronRight = event.target.classList.contains('fa-chevron-right')
    const prevBtn = slider.querySelector('.slider__prev-btn')
    const nextBtn = slider.querySelector('.slider__next-btn')

    if (isTargetPrevBtn || isTargetChevronLeft) {
        index--
        setTimeout(() => {
            hideAndDisplayBtns(prevBtn, nextBtn, index, planets)
            updateContent(planets, index)
        }, 500)

    } else if (isTargetNextBtn || isTargetChevronRight) {
        index++
        setTimeout(() => {
            hideAndDisplayBtns(prevBtn, nextBtn, index, planets)
            updateContent(planets, index)
        }, 500)
    }
}

function hideAndDisplayBtns(prev, next, index, planets) {
    if (index === 0) prev.style.display = 'none'
    if (index !== 0) {
        prev.style.display = 'block'
        next.style.display = 'block'
    }
    if (index === planets.length - 1) next.style.display = 'none'
}

function updateContent(planets, index) {
    const container = slider.querySelector('.planet-container')
    const planetName = container.querySelector('.planet-container__name')
    const planetPopulation = container.querySelector('.planet-container__population')
    const planetTerrain = container.querySelector('.planet-container__terrain')
    const planetGravity = container.querySelector('.planet-container__gravity')

    planetName.textContent = `Planet name: ${planets[index].name}`
    planetPopulation.textContent = `Planet population: ${planets[index].population}`
    planetTerrain.textContent = `Planet terrain: ${planets[index].terrain}`
    planetGravity.textContent = `Planet gravity: ${planets[index].gravity}`
}