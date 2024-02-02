import '../scss/style.scss'

// Logos slider
const sliderContainer = document.querySelector('.clients__slider')
const sliderCopy = sliderContainer.querySelector('.clients__slider-slide').cloneNode(true)
sliderContainer.appendChild(sliderCopy)

// Navigation dropdown
const dropdownIcon = document.querySelector('.menu__arrow-down')
const dropdownMenu = document.querySelector('.dropdown')

dropdownIcon.addEventListener('click', () =>
{
    dropdownMenu.classList.toggle('show')
})

// Security section's slider
const securitySlider = document.querySelector('.security-slider__wrapper')
const securitySlides = document.querySelectorAll('.security-slider__slide')
const securitySliderNavigationUp = document.querySelector('.slide-up')
const securitySliderNavigationDown = document.querySelector('.slide-down')

const slidesLength = securitySlides.length

let activeSlideIndex = 0

// console.log(securitySlides[5].clientHeight);

function changeSlide(direction)
{
    let height = securitySlides[activeSlideIndex].clientHeight;
    // let nextHeight = securitySlides[activeSlideIndex + 1].clientHeight;
    // securitySlider.style.maxHeight = `${height + nextHeight + 30}px`
    // console.log(securitySlider.clientHeight);
    if (direction === 'up')
    {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1)
        {
            activeSlideIndex = 0
        }
    } else if (direction === 'down')
    {
        activeSlideIndex--
        if (activeSlideIndex < 0)
        {
            activeSlideIndex = slidesLength - 1
        }
    }
    securitySlider.style.transform = `translateY(-${height * activeSlideIndex}px)`;
}

securitySliderNavigationUp.addEventListener('click', () => changeSlide('up'))
securitySliderNavigationDown.addEventListener('click', () => changeSlide('down'))

// Tabs

const tabs = document.querySelectorAll('.tabs__btn'),
      tabsContent = document.querySelectorAll('.employee__tabcontent'),
      tabsParent = document.querySelector('.tabs');

function hideTabContent()
{
    tabsContent.forEach(item =>
    {
        item.classList.add('hide')
        item.classList.remove('show', 'fade')
    })

    tabs.forEach(item =>
    {
        item.classList.remove('tabs__btn-active')
    })
}

function showTabContent(i = 0)
{
    tabsContent[i].classList.add('show', 'fade')
    tabsContent[i].classList.remove('hide')
    tabs[i].classList.add('tabs__btn-active')
}

hideTabContent()
showTabContent()

tabsParent.addEventListener('click', (event) =>
{
    const target = event.target

    if (target && target.classList.contains('tabs__btn'))
    {
        tabs.forEach((item, i) =>
        {
            if (target == item)
            {
                hideTabContent()
                showTabContent(i)
            }
        })
    }
})