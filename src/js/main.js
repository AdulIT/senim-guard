import '../scss/style.scss'
import ItcCollapse from '../js/collapse'

// Navigation dropdown
const dropdownIcon = document.querySelectorAll('.arrow-down')
const dropdownMenu = document.querySelector('.dropdown')

dropdownIcon.forEach(dropdown => {
    dropdown.addEventListener('click', () =>
    {
        dropdownMenu.classList.toggle('show')
    })
})

// Close dropdown menu when click outside of it
document.addEventListener('click', (event) =>
{
    const isClosest = event.target.closest('.arrow-down');

    if (!isClosest && dropdownMenu.classList.contains("show"))
    {
        dropdownMenu.classList.remove("show");
    }
})

document.addEventListener('keydown', (event) =>
{
    if (event.key === 'Escape' && dropdownMenu.classList.contains("show"))
    {
        dropdownMenu.classList.remove("show");
    }
})

const elems = document.querySelectorAll('.collapse');
const arrowIcons = document.querySelectorAll('.arrow-icon')

const collapses = []
elems.forEach((elem) => collapses.push(new ItcCollapse(elem)));

// Menu Burger
const hamburger = document.querySelector('.hamburger'),
      menu =  document.querySelector('.menu')

hamburger.addEventListener('click', () =>
{
    menu.classList.toggle('menu-active')
    document.body.classList.toggle('lock-scroll');
})

if (menu.classList.contains('menu-active'))
{
    menu.style.overflow = 'hidden'
}

document.addEventListener('click', function(event)
{
    if (event.target.dataset.collapse1 !== undefined) {
        collapses[0].toggle()
        arrowIcons[0].classList.toggle('rotate')
    }
    if (event.target.dataset.collapse2 !== undefined) {
        collapses[1].toggle()
        arrowIcons[1].classList.toggle('rotate')
    }
})