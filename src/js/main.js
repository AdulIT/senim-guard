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

const collapses = []
elems.forEach((elem) => collapses.push(new ItcCollapse(elem)));

document.addEventListener('click', function(event)
{
    if (event.target.dataset.collapse !== undefined) {
        collapses.forEach(collapse => collapse.toggle())
      }
})

// Menu Burger
const hamburger = document.querySelector('.hamburger'),
      closeBtn = document.querySelector('.close'),
      menu =  document.querySelector('.menu')

hamburger.addEventListener('click', () =>
{
    menu.classList.toggle('menu-active')
    // closeBtn.classList.add('close-active')
})

// closeBtn.addEventListener('click', () =>
// {
//     menu.classList.remove('menu-active')
//     closeBtn.classList.remove('close-active')
// })