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

// Menu Burger
const hamburger = document.querySelector('.hamburger'),
      closeBtn = document.querySelector('.close'),
      menu =  document.querySelector('.menu')

hamburger.addEventListener('click', () =>
{
    menu.classList.toggle('menu-active')

    // if (menu.classList.contains('menu-active'))
    // {
    //     if (!event.target.classList.contains('menu'))
    //     {
    //         menu.classList.remove('menu-active')
    //     }
    // }
})

document.addEventListener('click', function(event)
{
    if (event.target.dataset.collapse !== undefined) {
        collapses.forEach(collapse => collapse.toggle())
    }
})

// Autopark Tabs

const tabs = document.querySelectorAll('.auto__tabs-btn'),
      tabsContent = document.querySelectorAll('.auto__tabcontent'),
      tabsParent = document.querySelector('.auto__tabs');

function hideTabContent()
{
    tabsContent.forEach(item =>
    {
        item.classList.add('hide')
        item.classList.remove('show', 'fade')
    })
console.log(tabs);
    tabs.forEach(item =>
    {
        item.classList.remove('auto__tabs-btn_active')
    })
}

function showTabContent(i = 0)
{
    tabsContent[i].classList.add('show', 'fade')
    tabsContent[i].classList.remove('hide')
    tabs[i].classList.add('auto__tabs-btn_active')
}

hideTabContent()
showTabContent()

tabsParent.addEventListener('click', (event) =>
{
    const target = event.target

    if (target && target.classList.contains('auto__tabs-btn'))
    {
        tabs.forEach((item, i) =>
        {
            console.log(item);
            if (target == item)
            {
                hideTabContent()
                showTabContent(i)
            }
        })
    }
})