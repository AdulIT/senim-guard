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

const elems = document.querySelectorAll('.collapse');

const collapses = []
elems.forEach((elem) => collapses.push(new ItcCollapse(elem)));

document.addEventListener('click', function(event)
{
    console.log(event.target.dataset.collapse);
    if (event.target.dataset.collapse !== undefined) {
        collapses.forEach(collapse => collapse.toggle())
      }
})