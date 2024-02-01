import '../scss/style.scss'

const sliderContainer = document.querySelector('.clients__slider')
const sliderCopy = sliderContainer.querySelector('.clients__slider-slide').cloneNode(true)
sliderContainer.appendChild(sliderCopy)

const dropdownIcon = document.querySelector('.menu__arrow-down')
const dropdownMenu = document.querySelector('.dropdown')

dropdownIcon.addEventListener('click', () =>
{
    dropdownMenu.classList.toggle('show')
})